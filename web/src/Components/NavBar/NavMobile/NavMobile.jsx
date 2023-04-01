import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./nav_mobile.css";

const NavMobile = () => {
    return (
        <div className="navbar-main">
            <div className="journo-logo">
                <img src="../../../journo-logo.png" alt="" />
            </div>
            {/* <GiHamburgerMenu/>
            <div className="navbar-mobile-buttons">
                <a href="#">About</a>
                <a href="#">Questionnaire</a>
                <a href="#">Results</a>
                <a href="#">Contact us</a>
            </div> */}
        </div>
    );
}

export default NavMobile;