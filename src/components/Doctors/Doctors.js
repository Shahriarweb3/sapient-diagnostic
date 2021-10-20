import React from 'react';
import './Doctors.css'
import doctor1 from '../../images/Doctors/doctor1.jpg';
import doctor2 from '../../images/Doctors/doctor2.jpg';
import doctor3 from '../../images/Doctors/doctor3.jpg';
import doctor4 from '../../images/Doctors/doctor4.jpg';
import doctor5 from '../../images/Doctors/doctor5.jpg';


const Doctors = () => {
    return (
        <div className="px-8 mx-8 flex-none sm:flex-1 md:flex-initial lg:flex justify-evenly rounded shadow-inner">
            <div className="p-6 single-doctor">
                <img className="doctor-image" src={doctor1} alt="" />
                <br />
                <h4>Name: <span className="text-yellow-500 font-bold">Joyce Benson</span></h4>
                <h6>Cancer Specialist</h6>
            </div>
            <div className="p-6 single-doctor">
                <img className="doctor-image" src={doctor2} alt="" />
                <br />
                <h4>Name: <span className="text-yellow-500 font-bold">Joyce Benson</span></h4>
                <h6>Darmatologist</h6>
            </div>
            <div className="p-6 single-doctor">
                <img className="doctor-image" src={doctor3} alt="" />
                <br />
                <h4>Name: <span className="text-yellow-500 font-bold">Joyce Benson</span></h4>
                <h6>Cardiologidt</h6>
            </div>
            <div className="p-6 single-doctor">
                <img className="doctor-image" src={doctor4} alt="" />
                <br />
                <h4>Name: <span className="text-yellow-500 font-bold">Joyce Benson</span></h4>
                <h6>Brain Specialist</h6>
            </div>
            <div className="p-6 single-doctor">
                <img className="doctor-image" src={doctor5} alt="" />
                <br />
                <h4>Name: <span className="text-yellow-500 font-bold">Joyce Benson</span></h4>
                <h6>Cancer Specialist</h6>
            </div>

        </div>
    );
};

export default Doctors;