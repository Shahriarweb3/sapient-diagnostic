import React from 'react';
import banner from '../../images/homeBanner.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-area">
            <div className="head-image">
                <img style={{ width: "100%", }} src={banner} alt="" />
            </div>
            <div className='banner-text relative lg:inset-x-20 lg:inset-y-60 sm:absolute md:fixed lg:absolute'>
                <h1 className="lg:my-4 text-sm md:text-2xl lg:text-3xl font-bold"> The Trusted and Friendly Medical Experts</h1>
                <p className=" text-xs lg:text-base font-medium">We Want to See You Happy</p>
                <button className="lg:my-2 bg-blue-500 hover:bg-blue-700 text-xs py-1 text-white font-normal px-2 rounded-full">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Banner;