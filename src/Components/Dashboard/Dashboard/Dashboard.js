import React, { useState, useEffect, useContext } from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://limitless-mountain-84797.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <section>
            <div className="container-fluid row dashboard">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-3 mx-5 py-4">
                    <h3 className='active'>Appointments Date</h3>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments} />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;