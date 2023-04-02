import React from "react";
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import './contact_us.css';

export const ContactUs = () => {
    const openNewTab = (url) => {
        window.open(url);
    };

    return (
        <div className="contact-main" id="ContactUs">
            <div className="contact-text">
                <h1>Contact us</h1>
                <p>Do you have any questions or wish to know more about us? 
                    Contact us in Instagram, Facebook, or Email:
                </p>
            </div>
            <div className="contact-icons">
                <FaInstagram className="icon" onClick={openNewTab} />
                <FaFacebook className="icon" onClick={openNewTab("https://www.facebook.com/TheHubAUBG")}/>
                <FaEnvelope className="icon" onClick={openNewTab()}/>
            </div>
        </div>
    )
}
 
export default ContactUs;