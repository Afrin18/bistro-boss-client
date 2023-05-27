import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useEffect, useState } from "react";
import MenuItem from '../Shared/MenuItem';


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)})
    },[])

    return (
        <section className='mb-24'>
            <SectionTitle
                heading={"From our menu"}
                subHeading={"Popular Items"}
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    >
                    </MenuItem>)
                }
                
            </div>
            <button className="mt-8 btn btn-outline border-0 border-b-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;