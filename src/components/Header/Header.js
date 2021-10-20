import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut, loginWithEmailPassword } = useAuth();
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-start py-12 bg-gradient-to-r from-green-400 to-blue-500">
            <div>
                <h1 className="mx-10 sm: text-xl lg:text-4xl font-extrabold">Sapient Diagnostic Lab</h1>
            </div>
            <div className="navbar">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/appointment">Appointment</NavLink>


                {user.email && <span className="text-blue-700 pl-1"> {user.displayName}</span>}
                {user.email ?
                    <button onClick={logOut} class="hover:bg-gray-400 text-red-700 px-1 rounded">
                        Logout
                    </button>
                    :
                    <NavLink to="/login">Login</NavLink>

                }

            </div>
        </div>
    );
};

export default Header;