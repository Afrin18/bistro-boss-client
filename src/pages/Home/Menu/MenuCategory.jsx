import MenuItem from '../../Shared/MenuItem';
import Cover from '../../Shared/Cover';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='pt-12'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mt-16'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>
            <button className="flex justify-center items-center mx-auto mt-8 btn btn-outline border-0 border-b-4">order your favourite food</button>
        </div>
    );
};

export default MenuCategory;