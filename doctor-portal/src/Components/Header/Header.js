import React from 'react'
import { BusinessInfo } from '../BusinessInfo/BusinessInfo';
import { Headermain } from '../Headermain/Headermain';
import { LearnMore, LearnMoreAppointment } from '../LearnMore/LearnMore';
import { Navbar } from '../Navbar/Navbar';
import { Services } from '../Services/Services';
import './Header.css';
import Testimonials from '../Testimonials/Testimonials'
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


export const Header = () => {
    return (
        <div className="header-container">
            <Navbar/>
            <Headermain/>
            <BusinessInfo/>
            <Services/>
            <LearnMore/>
            <LearnMoreAppointment/>
            <Testimonials/>
            <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    )
}
