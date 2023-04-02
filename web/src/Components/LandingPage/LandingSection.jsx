import React from "react";
import Navbar from "../NavBar/NavBar";
import './landing_section.css';

export const LandingSection = () => {
    return (
        <div className="landing-main">
            <div className="dimmer">
                <Navbar/>
                <div className="landing-header">
                    <h1 className="landing-header"><span id="spin"></span></h1>
                </div>
                <div className="landing-header-info">
                    <p>Explore the world with ease - book your next adventure to the perfect destination. 
                        From beach getaways to mountain retreats, find your perfect escape with our hassle-free 
                        travel booking platform.
                    </p>
                </div>
                <div className="landing-btn"> 
                    <a href="#Questionnaire"> Questionnaire</a>
                </div>
            </div>
        </div>
    )
}
 
export default LandingSection;