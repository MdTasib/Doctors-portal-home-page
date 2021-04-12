import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({ info }) => {
    const { title, description, icon, background } = info;
    return (
        <div className="col-md-4 text-white">
            <div className={`d-flex info-${background} align-items-center justify-content-center p-4 rounded`}>
                <div>
                    <FontAwesomeIcon className='info-icon mr-2' icon={icon} />
                </div>
                <div className='ml-2'>
                    <h4>{title}</h4>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;