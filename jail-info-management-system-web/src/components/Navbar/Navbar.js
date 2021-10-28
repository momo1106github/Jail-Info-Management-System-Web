import React, { useState } from 'react';
import LinkButton from '../LinkButton';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import {Link} from 'react-router-dom';
import BookingDropdown from './Dropdown';
import TrustDropdown from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [trustDrop, setDropDown2] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        setDropdown(true);
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };
    
    const onMouseEnter2 = () => {
        setDropDown2(true);
    };

    const onMouseLeave2 = () => {
        setDropdown(false);
    }
    
    return(
        <nav className="navbar">
            <LinkButton linklabel="JISM" link="/home" page="navItem"/>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                <Link
                to="/home"
                className="navItem">
                    Home
                </Link>
                </li>
                <li
                className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                    <Link
                     to='/bookingcreate/1'
                     className='nav-links'
                    >
                    Booking
                    </Link> 
                    {dropdown && <BookingDropdown/>}
                </li>
                <li
                className='nav-item'
                onMouseEnter2={onMouseEnter2}
                onMouseLeave2={onMouseLeave2}
                >
                    <Link
                     to='/'
                     className='nav-links'
                    >
                    Trust Accounts
                    </Link> 
                    {trustDrop && <TrustDropdown/>}
                </li>
                <li className='nav-item'>
                <Link
                to="/"
                className="navItem">
                    Logout
                </Link>
                        </li>
            </ul>
        </nav>
    )
}

export default Navbar;