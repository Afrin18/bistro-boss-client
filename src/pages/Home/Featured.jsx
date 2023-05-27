import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import featuredImg from '../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8'>
            <SectionTitle
                heading={"Featured item"}
                subHeading={"Check It Out"}
            >
            </SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt=""/>
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim veritatis temporibus iure facilis saepe expedita eos dolores accusamus, voluptatibus voluptate iusto quod magni perspiciatis cupiditate totam doloribus sit repellendus inventore!</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;