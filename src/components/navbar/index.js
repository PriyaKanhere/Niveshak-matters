import React, { useState } from "react";
import { Hamburger, Menu, Logo, Nav, MenuLink, Picture } from "./styles/navbar"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Logo href="">
                Go<span>Fire</span>

            </Logo>

            <img src="./images/misc/background1.jpg" width="4%"></img>

            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink href="">Our Work</MenuLink>
                <MenuLink href="">About</MenuLink>
                <MenuLink href="">Contact</MenuLink>
            </Menu>

        </Nav>
    );
};

export default Navbar;