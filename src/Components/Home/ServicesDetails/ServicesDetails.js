import React from 'react';

const ServicesDetails = ({ service }) => {
    const { name, img } = service;
    return (
        <div className='col-md-4 px-3 text-center'>
            <img style={{ height: '70px' }} src={img} alt={name} />
            <h5 className='py-3'>{name}</h5>
            <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, perferendis.</p>
        </div>
    );
};

export default ServicesDetails;