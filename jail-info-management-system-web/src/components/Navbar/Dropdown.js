import React, {useState} from 'react';
import {SubMenuItems} from './MenuItems';
import {Link} from 'react-router-dom';
import './Dropdown.css'
import {TrustSubMenuItems} from './MenuItems';

function BookingDropdown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        
        <ul 
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {SubMenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className={item.cName} 
                        to={item.url} 
                        onClick={() => setClick(false)}
                        >
                            {item.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

function TrustDropdown(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        
        <ul 
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {TrustSubMenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className={item.cName} 
                        to={item.url} 
                        onClick={() => setClick(false)}
                        >
                            {item.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
export default BookingDropdown;