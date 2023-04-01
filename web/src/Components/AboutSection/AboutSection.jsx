import React from "react";
import './about_section.css';

export const AboutSection = () => {
    return (
        <div className="about-main">
            <div className="about-text">
                <h1>About us</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration 
                    in some form, by injected humour, or randomised words which don't look even slightly believable. If you 
                    are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden 
                    in the middle of text. 
                </p>
                {/* <div className="landing-btn"> 
                    <a href="#">Read more</a>
                </div> */}
            </div>
            <div className="about-picture">
                <img src="././public/about-picture.jpg" alt="Traveling around the world" />
            </div>
        </div>
    )
}
 
export default AboutSection;