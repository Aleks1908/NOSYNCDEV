import React from "react";
import "./navbar.css";

const NavMobile = () => {
    return (
        <div className="navbar-main">
            <div className="journo-logo">
                <img src="../../../journo-logo.png" alt="" />
            </div>
            <a href="" className="icon" onclick="myFunction()">
                <i className="fa fa-bars"></i>
            </a>
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