import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teath from '../../../images/teath.png';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride,
    },
    {
        name: 'Cavity Filling',
        img: cavity,
    },
    {
        name: 'Teath Whitening',
        img: teath,
    }
]

const Services = () => {
    return (
        <section className='py-5 container'>
            <div className="text-center my-5">
                <h5 className='active'>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="row py-3">
                {
                    servicesData.map(service => <ServicesDetails key={service.name} service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;