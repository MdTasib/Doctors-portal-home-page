import React from 'react';
import AppointmentList from '../AppointmentList/AppointmentList';

const AppointmentsByDate = ({ appointments }) => {
    console.log(appointments);
    return (
        <div className='py-4'>
            <h2 className='text-center active'>Appointments {appointments.length}</h2>
            {
                appointments.length ?
                    <AppointmentList appointments={appointments} />
                    :
                    <div className="p-5">
                        <h4 className="lead text-center">No Appointments for this Date</h4>
                    </div>
            }
        </div>
    );
};

export default AppointmentsByDate;