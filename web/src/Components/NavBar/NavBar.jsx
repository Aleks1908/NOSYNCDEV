import React from "react";
import "./navbar.css";

const Navbar = () => {
    return(
        <div className="navbar-main">
            <div>
                <img src="../../../journo-logo.png" alt="" />
            </div>
            <div className="navbar-buttons">
                <a href="#">About</a>
                <a href="#">Questionnaire</a>
                <a href="#">Results</a>
                <a href="#">Contact us</a>
            </div>
        </div>
    )
}

export default Navbar;