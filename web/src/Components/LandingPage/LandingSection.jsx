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
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are ma available, but the majority have suffered</p>
                </div>
                <div className="landing-btn"> 
                    <a href="#"> Questionare</a>
                </div>
            </div>
        </div>
    )
}
 
export default LandingSection;