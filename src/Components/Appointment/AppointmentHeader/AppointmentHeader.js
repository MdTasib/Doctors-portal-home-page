import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({ handleDateChange }) => {
    return (
        <main style={{ height: '89vh' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h2 className='py-4'>Appointment</h2>
                <Calendar value={new Date()} onChange={handleDateChange} />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="chair" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;