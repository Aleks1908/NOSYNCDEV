import React from "react";
import "./navbar.css";

const Navbar = () => {
    return(
        <div className="navbar-main">
            <div>Logo</div>
            <div className="navbar-buttons">
                <div>About</div>
                <div>Questionnaire</div>
                <div>Results</div>
                <div>Contact us</div>
            </div>
        </div>
    )
}

export default Navbar;