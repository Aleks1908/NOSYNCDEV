import React from "react";
import { useMediaQuery } from 'react-responsive';
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Navbar = ({ props }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    if (!isMobile) {
        return <NavDesktop props={props} />;
    } else {
        return <NavMobile props={props} />;
    }
}

export default Navbar;