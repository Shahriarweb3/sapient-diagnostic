import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import initializeAutentication from '../../Firebase/firebase.init';
import useAuth from '../../hook/useAuth';

initializeAutentication();

const Register = () => {
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();

    const { error, email, password, createNewUser, handleEmailChange, handlePasswordChange, signInWithEmailAndPassword, loginWithEmailPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    return (
        <div>
            <h2 className="text-3xl font-bold my-8 text-purple-600">Please {isLogin ? 'Login' : 'Register'}</h2>
            <form className=" mx-auto w-full max-w-lg">
                {
                    isLogin ?
                        <div>

                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Email
                                </label>
                                <input onBlur={handleEmailChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Email" />

                            </div>
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Password
                                </label>
                                <input onBlur={handlePasswordChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Password" />
                                <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        First Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Last Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="w-full">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Email
                                </label>
                                <input onBlur={handleEmailChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Email" />
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Password
                                    </label>
                                    <input onBlur={handlePasswordChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Password" />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                        City
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Your city" />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                        Division
                                    </label>
                                    <div className="relative">
                                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                            <option>Dhaka</option>
                                            <option>Chattogram</option>
                                            <option>Khulna</option>
                                            <option>Barishal</option>
                                            <option>Rajshahi</option>
                                            <option>Sylhet</option>
                                            <option>Rangpur</option>
                                            <option>Mymensingh</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                        Post Code
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="3100" />
                                </div>
                            </div>
                        </div>
                }


                <div className="w-full md:w-1/2 px-3 mt-2">
                    <label className="md:w-2/3 block text-gray-500 font-bold">
                        <input onChange={toggleLogin} className="mr-2 leading-tight" type="checkbox" />
                        <span className="text-sm">
                            Already Registered?
                        </span>
                    </label>

                </div>
                <div className="w-full md:w-1/2 mt-2 text-red-500">
                    <h4>{error}</h4>
                </div>
                <div className="w-full flex mt-2 mx-3">

                    {
                        isLogin ? <div>
                            <button onClick={loginWithEmailPassword} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Login
                            </button>
                        </div>

                            :
                            <div>
                                <button onClick={createNewUser} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Register</button>
                            </div>

                    }


                </div>

            </form>
        </div>
    );
};

export default Register;