import React from 'react';

const BookingCard = ({ date, booking }) => {
    const { visitingHour, totalSpace, subject } = booking;
    return (
        <div className="col-md-4 p-3">
            <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title active">{subject}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{visitingHour}</h6>
                    <p className="card-text">{totalSpace} SPACES AVAILABLE</p>
                    <a href="#" class="btn active-bg">BOOK APPOINTMENT</a>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;