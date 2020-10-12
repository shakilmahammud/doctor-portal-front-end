import React from 'react'
import chair from '../../images/chair.png'
import './Headermain.css'
export const Headermain = () => {
    return (
       <main>
           <div className="row d-flex align-items-center" style={{height:'600px'}}>
               <div className="col-md-4 offset-md-1 ">
                    <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, fugiat. Vel mollitia facilis debitis incidunt.</p>
                    <button className="btn btn-primary">GET APPOINTMENT</button>
               </div>
               <div className="col-md-6">
               <img src={chair} alt="" className="img-fluid"/>

               </div>
           </div>
       </main>
    )
}
