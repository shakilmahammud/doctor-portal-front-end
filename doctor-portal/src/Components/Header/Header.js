import React from 'react'
import { BusinessInfo } from '../BusinessInfo/BusinessInfo';
import { Headermain } from '../Headermain/Headermain';
import { LearnMore, LearnMoreAppointment } from '../LearnMore/LearnMore';
import { Navbar } from '../Navbar/Navbar';
import { Services } from '../Services/Services';
import './Header.css';


export const Header = () => {
    return (
        <div className="header-container">
            <Navbar/>
            <Headermain/>
            <BusinessInfo/>
            <Services/>
            <LearnMore/>
            <LearnMoreAppointment/>
        </div>
    )
}
