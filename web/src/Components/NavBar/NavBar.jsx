import React from "react";
import { useMediaQuery } from 'react-responsive';
import "./navbar.css";

const Navbar = ({ props }) => {
    const NavDesktop = () => {
        return (
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
        );
    }

    const NavMobile = () => {
        return (
            <div className="navbar-main">
                <div className="journo-logo">
                    <img src="../../../journo-logo.png" alt="" />
                </div>
                {/* <div className="navbar-buttons">
                    <a href="#">About</a>
                    <a href="#">Questionnaire</a>
                    <a href="#">Results</a>
                    <a href="#">Contact us</a>
                </div> */}
                <a href="" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        );
    }

    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    if (!isMobile) {
        return <NavDesktop />;
    } else {
        return <NavMobile />;
    }
}

export default Navbar;