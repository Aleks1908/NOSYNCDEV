import React from "react";
import './about_section.css';

export const AboutSection = () => {
    return (
        <div className="about-main" id="About">
            <div className="about-text">
                <h1>About us</h1>
                <p>Welcome to our travel booking website - where adventure awaits and time is on your side. 
                    With our easy-to-use platform, you can quickly search and book your next trip without any hassle. 
                    We offer a wide range of travel options to suit every style and budget, and our 24/7 customer 
                    support is always here to help. So why wait? Let us help you turn your travel dreams into a reality.
                </p>
            </div>
            <div className="about-picture">
                <img src="././public/about-picture.jpg" alt="Traveling around the world" />
            </div>
        </div>
    )
}
 
export default AboutSection;