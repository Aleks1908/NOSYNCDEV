import React from "react";
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import './contact_us.css';

export const ContactUs = () => {
    return (
        <div className="contact-main">
            <div className="contact-text">
                <h1>Contact us</h1>
                <p>Do you have any questions or wish to know more about us? 
                    Contact us in Instagram, Facebook, or Email:
                </p>
            </div>
            <div className="contact-icons">
                <FaInstagram className="icon" />
                <FaFacebook className="icon"/>
                <FaEnvelope className="icon"/>
            </div>
        </div>
    )
}
 
export default ContactUs;