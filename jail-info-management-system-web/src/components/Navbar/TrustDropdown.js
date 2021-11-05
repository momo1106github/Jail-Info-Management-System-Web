import React, {useState} from 'react';
import {TrustSubMenuItems} from './MenuItems';
import {Link} from 'react-router-dom';
import './Dropdown.css'

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
export default TrustDropdown;