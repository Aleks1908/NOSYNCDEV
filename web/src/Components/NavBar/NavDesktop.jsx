import React from "react";
import "./navbar.css";

const NavDesktop = () => {
    return (
        <div className="navbar-main">
            <div>
                <img src="../../../journo-logo.png" alt="" />
            </div>
            <div className="navbar-buttons">
                <a href="#About">About</a>
                <a href="#Questionnaire">Questionnaire</a>
                <a href="#FeaturedPlaces">Featured places</a>
                <a href="#ContactUs">Contact us</a>
            </div>
        </div>
    );
}

export default NavDesktop;