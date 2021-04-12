import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';


const infosData = [
    {
        title: 'Opening Hours',
        description: 'We Are Open 7 Days',
        icon: faClock,
        background: 'primary',
    },
    {
        title: 'Visit our location',
        description: 'Brookyn, NY 10036, United States',
        icon: faMapMarker,
        background: 'dark',
    },
    {
        title: 'Contact us now',
        description: '+000 123 352232',
        icon: faPhone,
        background: 'primary',
    },
]

const BusinessInfo = () => {
    return (
        <section className="row container-fluid m-auto">
            {
                infosData.map(info => <InfoCard key={info.title} info={info} />)
            }
        </section>
    );
};

export default BusinessInfo;