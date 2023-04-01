import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";

const NavMobile = () => {
    return (
        <div className="navbar-main">
            <div className="journo-logo">
                <img src="../../../journo-logo.png" alt="" />
            </div>
            <GiHamburgerMenu/>
            {/* <div className="navbar-buttons">
                <a href="#">About</a>
                <a href="#">Questionnaire</a>
                <a href="#">Results</a>
                <a href="#">Contact us</a>
            </div> */}
            
        </div>
    );
}

export default NavMobile;