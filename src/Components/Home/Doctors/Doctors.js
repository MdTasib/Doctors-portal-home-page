import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <section className="my-5 py-5 doctors">
            <div className="doctors-header text-center">
                <h5 className="active">Our Doctors</h5>
            </div>
            <div className="row">
                <Doctor />
                <Doctor />
                <Doctor />
            </div>
        </section>
    );
};

export default Doctors;