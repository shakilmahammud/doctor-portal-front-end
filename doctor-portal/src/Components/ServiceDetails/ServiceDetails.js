import React from 'react'

export const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <div>
                <img src={service.img} style={{height:'50px'}} alt=""/>
                <h4 className="mt-3 mb-3">{service.name}</h4>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, vel.</p>
            </div>
        </div>
    )
}
