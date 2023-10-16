import React from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/home' activeStyle>PVL-Media</NavLink>
                    <NavLink to='/about' activeStyle>About Us</NavLink>
                    <NavLink to='/gallery' activeStyle>Gallery</NavLink>
                </NavMenu>
            </Nav>
        </>
    )
};

export default Navbar;