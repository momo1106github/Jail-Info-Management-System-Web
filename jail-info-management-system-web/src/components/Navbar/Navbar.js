import React, { Component } from 'react';
import LinkButton from '../LinkButton';
import { MenuItems } from "./MenuItems"
import './Navbar.css'

class Navbar extends Component {
    
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">JISM</h1>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <LinkButton page={item.cName} linklabel={item.title} link= {item.url}>
                            </LinkButton>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar