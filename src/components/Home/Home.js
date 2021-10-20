import React from 'react';
import Doctors from '../Doctors/Doctors';
import Test from '../Test/Test';
import Tests from '../Test/Tests';
import Banner from './Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="my-8 text-3xl">Our Test Packages</h2>
            <Tests></Tests>
            <h2 className="my-8 text-2xl">Our Speciliazed Doctors</h2>
            <Doctors></Doctors>

        </div>
    );
};

export default Home;