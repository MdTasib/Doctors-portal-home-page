import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{ height: '89vh' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h2>Your New Smile <br />Starts Here</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quia minus, magnam suscipit itaque at.</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="chair" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;