import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer py-4">
            <div className="company-info lg:flex justify-around mx-4 items-center">
                <div className="contact-info">
                    <h3 className="text-3xl font-black text-red-600">Sapient Diagnostic Lab</h3>
                </div>
                <div>
                    <form className="w-full max-w-sm">
                        <div className="flex items-center py-2">
                            <input className="bg-yellow-300 w-full text-black mr-3 py-2 px-3 leading-tight focus:outline-none" type="text" placeholder="Your Email" aria-label="Full name" />
                            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                Subscribe Newsletter
                            </button>

                        </div>
                    </form>
                </div>
                <div className="contact-info">
                    <h3 className="text-xl underline">Contact Us</h3>
                    <small>House #xx, Road # 2, Dhanmondi R/A,</small>
                    <br />
                    <small>Dhaka-1205, Bangladesh</small>
                    <br />
                    <small>Phone : 09613 xxxxxx, 09666 xxxxxx</small>
                    <br />
                    <small>E-mail : info@sapientdiagnostic.com</small>
                </div>
            </div>
            <small className="footer-text">Copyright @ Sapient Diagnostic Lab 2021</small>
        </div>
    );
};

export default Footer;