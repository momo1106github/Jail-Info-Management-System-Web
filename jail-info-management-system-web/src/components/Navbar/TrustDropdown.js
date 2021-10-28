import {TrustSubMenuItems} from './MenuItems';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

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