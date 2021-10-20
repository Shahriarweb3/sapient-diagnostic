import React from 'react';
import { Link } from 'react-router-dom';

const NoRoute = () => {
    return (
        <div className="py-12">
            <h1 className="text-3xl font-bold">Oh Sorry! You are on the wrong Page</h1>
            <br />
            <Link to="/home" className="text-blue-700">Go To Home</Link>
        </div>
    );
};

export default NoRoute;