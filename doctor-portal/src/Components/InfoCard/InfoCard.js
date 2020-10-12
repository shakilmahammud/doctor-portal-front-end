import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css'

export const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 text-white main-container">
            <div className={`d-flex justify-content-center info-${info.background} info-container`}>
            <div>
            <FontAwesomeIcon className="info-icon" icon={info.icon} />
            </div>
            <div>
           <h6>{info.title}</h6>
            <small>{info.description}</small>
            </div>
            </div>
        </div>
    )
}
