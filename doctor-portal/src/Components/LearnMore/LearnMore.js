import React from 'react'
import learn from '../../images/learn.png'
import './Learn.css';
import doctor from '../../images/doctor.png'
export const LearnMore = () => {
    return (
        <section>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-5">
                       <img src={learn} alt="" style={{width:'450px ',height:'450px'}}/>
                    </div>
                    <div className="col-md-5">
                        <h4 className="">Exceptional Dental <br/> Care On Your Terms</h4>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In saepe officia commodi dolorum molestias doloremque deleniti illum ducimus culpa fuga at praesentium dolores corrupti porro, nemo assumenda quisquam reiciendis velit ex. Itaque tempora amet consectetur ipsa suscipit ab minima eos odit aliquid impedit beatae alias ducimus deserunt voluptate quas voluptatibus quod, quo molestiae. Illo beatae distinctio blanditiis molestias, dolorem corrupti. Non in molestias aliquam iusto amet quo nesciunt illo consequatur ex tempora, recusandae voluptatem quas asperiores facere, voluptatum explicabo incidunt, animi facilis. Dolorum fugiat eligendi vel eaque odit saepe tempora minus facere necessitatibus eveniet? Maxime commodi labore iste harum aperiam.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export const LearnMoreAppointment=()=>{
        return(
            <section className="p-5 mt-5">
                <div className="container appoinment">
                    <div className="row">
                        <div className="col-md-4">
                           <img src={doctor} alt="" style={{width:'100%', position:'relative', zIndex:'99', top:'-80px'}}/>
                        </div>
                        <div className="col-md-8 text-white" style={{width:'100%', position:'relative', zIndex:'99',}}>
                            <h5 style={{color:'#1cc7c1',marginTop:'20px'}}>appointment</h5>
                            <h2>Make an appointment <br/> Today</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa blanditiis modi tenetur. Et ut possimus iusto adipisci rerum provident?</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        )
}