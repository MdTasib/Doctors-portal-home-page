import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        _id: '',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '',
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '',
        id: 3,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '',
        id: 4,
        subject: 'Cosmetic Dentistry',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '',
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '',
        id: 6,
        subject: 'Cosmetic Dentistry',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]

const BookAppointment = ({ date }) => {
    return (
        <section>
            <div className="container">
                <h2 className='text-center active m-5'>Available Appointments on - {date.toDateString()}</h2>
                <div className="row">
                    {
                        bookingData.map(booking => <BookingCard date={date} booking={booking} key={booking.id} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;