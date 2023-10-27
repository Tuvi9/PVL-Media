import React from 'react';
import { Nav, NavLink, NavMenu, Bars } from './NavbarElements';

const Navbar = () => {
    return (
    <>
        <Nav>
            <NavLink to='/home' activeStyle >PVL-Media</NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/about' activeStyle >About Us</NavLink>
                <NavLink to='/gallery' activeStyle style={{marginRight: '40px'}}>Gallery</NavLink>
            </NavMenu>
        </Nav>
    </>
)
};

export default Navbar;