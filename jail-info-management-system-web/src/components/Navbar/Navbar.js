import React, { useState } from 'react';
import LinkButton from '../LinkButton';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import {Link} from 'react-router-dom';
import BookingDropdown from './Dropdown';
import TrustDropdown from './TrustDropdown';
import { useLocation } from 'react-router';
import logout from '../../App'

function Navbar() {
    const location = useLocation();
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [trustDrop, setDropdown2] = useState(false);
    const handleClick = () => setClick(!click); 

    const onMouseEnter = () => {
        setDropdown(true);
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };
    
    const onMouseEnter2 = () => {
        setDropdown2(true);
    }
    const onMouseLeave2 = () => {
        setDropdown2(false);
    };
    
    
    return(
        <nav className="navbar">
            <LinkButton linklabel="JIMS" link="/home" page="navItem"/>
            {location.pathname!== '/'&&<div>
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
                onMouseEnter={onMouseEnter2}
                onMouseLeave={onMouseLeave2}
                >
                    <Link
                     to='/newtransaction/1'
                     className='nav-links'
                    >
                    Trust Accounts
                    </Link> 
                    {trustDrop && <TrustDropdown/>}
                </li>
                <li className='nav-item'>
                <Link
                to="/"
                className="navItem"
                onClick={logout}>
                    Logout
                </Link>
                        </li>
            </ul> </div>}
        </nav>
    )
}

export default Navbar;