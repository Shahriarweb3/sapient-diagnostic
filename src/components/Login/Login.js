import { getAuth } from '@firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import initializeAutentication from '../../Firebase/firebase.init';
import useAuth from '../../hook/useAuth';

initializeAutentication();
const Login = () => {

    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, loginWithEmailPassword } = useAuth();
    return (
        <div>
            <h3 className="text-2xl font-bold text-blue-500 my-8">Please Login</h3>
            <div className="w-full mx-auto max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input onBlur={handleEmailChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="grid-email" type="text" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="grid-password">
                            Password
                        </label>
                        <input onBlur={handlePasswordChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />

                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={loginWithEmailPassword} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Login
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
            <button onClick={signInUsingGoogle} className="bg-yellow-500 hover:bg-blue-700 text-white font-light py-1 px-3 rounded">
                Google Sign In
            </button>
            <br />
            <Link to="/register" className="text-blue-400">New User?</Link>
        </div>
    );
};
export default Login;