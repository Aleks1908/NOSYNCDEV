import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import './contact_us.css';

export const ContactUs = () => {
    return (
        <div className="contact-main" id="ContactUs">
            <div className="contact-text">
                <h1>Contact us</h1>
                <p>Do you have any questions or wish to know more about us? 
                    Contact us in Instagram, Facebook, or Youtube:
                </p>
            </div>
            <div className="contact-icons">
            <a href="https://www.instagram.com/thehubaubg/?hl=bg" 
                    target="_blank"
                    className="icon-link">
                    <FaInstagram className="icon"/>
                </a>
                <a href="https://www.facebook.com/TheHubAUBG" 
                    target="_blank"
                    className="icon-link">
                    <FaFacebook className="icon"/>
                </a>
                <a href="https://www.youtube.com/channel/UChdtBZBvaK9XZurP3GjPDug" 
                    target="_blank"
                    className="icon-link">
                    <FaYoutube className="icon"/>
                </a>
            </div>
        </div>
    )
}
 
export default ContactUs;