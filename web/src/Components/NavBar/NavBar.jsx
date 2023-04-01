import React from "react";
import { useMediaQuery } from 'react-responsive';
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import "./navbar.css";

const Navbar = ({ props }) => {
    // const NavDesktop = () => {
    //     return (
    //         <div className="navbar-main">
    //             <div>
    //                 <img src="../../../journo-logo.png" alt="" />
    //             </div>
    //             <div className="navbar-buttons">
    //                 <a href="#">About</a>
    //                 <a href="#">Questionnaire</a>
    //                 <a href="#">Results</a>
    //                 <a href="#">Contact us</a>
    //             </div>
    //         </div>
    //     );
    // }

    // const NavMobile = () => {
    //     return (
    //         <div className="navbar-main">
    //             <div className="journo-logo">
    //                 <img src="../../../journo-logo.png" alt="" />
    //                 <a href="" className="icon" onclick="myFunction()">
    //                 <i className="fa fa-bars"></i>
    //             </a>
    //             </div>
    //             {/* <div className="navbar-buttons">
    //                 <a href="#">About</a>
    //                 <a href="#">Questionnaire</a>
    //                 <a href="#">Results</a>
    //                 <a href="#">Contact us</a>
    //             </div> */}
    //             
    //         </div>
    //     );
    // }

    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    if (!isMobile) {
        return <NavDesktop props={props} />;
    } else {
        return <NavMobile props={props} />;
    }
}

export default Navbar;