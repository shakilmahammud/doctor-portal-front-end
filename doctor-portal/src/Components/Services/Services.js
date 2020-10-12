import React from 'react';
import './Services.css';
import crevity from '../../images/crevity.png';
import Flourid from '../../images/flourid.png';
import teeth from '../../images/teeth.png';
import { ServiceDetails } from '../ServiceDetails/ServiceDetails';

const serviceData=[
    {
      name:'Flouride Treatment',
      img:Flourid,
    },
    {
        name:'Crevity Filling',
        img:crevity,
        },
    {
        name:'Teeth Whitning',
        img:teeth,
    }
]
export const Services = () => {
    return (
        <section className="text-center main-container">
           <div className="container mt-5">
               <h5>Our Services</h5>
            <h2>Services We Provied</h2>
            <div className="row p-5 mt-5">
         {
             serviceData.map(service=>
             <ServiceDetails service={service}  />)
             }
               </div>
           </div>
        </section>
    )
}
