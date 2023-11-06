import React from 'react';
import { Nav, NavLink, NavMenu, Bars } from './NavbarElements';

// Navigation bar component
const Navbar = () => {
    return (
    <>
        <Nav>
            <NavLink to='/home' activeStyle >PVL-Media</NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/about' activeStyle >About Us</NavLink>
                <NavLink to='/clients' activeStyle style={{marginRight: '2.5rem'}}>Our Clients</NavLink>
            </NavMenu>
        </Nav>
    </>
)
};

export default Navbar;