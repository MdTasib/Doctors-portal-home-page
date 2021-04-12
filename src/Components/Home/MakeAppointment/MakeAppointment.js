import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className='make-appointment my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className='img-fluid doctor-img' src={doctor} alt="Feature" />
                    </div>
                    <div className="col-md-7 pt-3 mt-4">
                        <h5 className='active'>APPOINTMENT</h5>
                        <h1 className='text-white py-3'>Make An Appointment <br />Today</h1>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas excepturi recusandae iste quod!</p>
                        <button className='btn btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;