import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Nav() {
    return (
        <div className="header">
                <ul>
                    <li id="logo">PORTFOLIO</li>
                        <li className="list"><Link to="/contact">Contact</Link></li>
                        <li className="list"><Link to="/about">About</Link></li>
                        <li className="list"><Link to="/">Home</Link></li>
                </ul>
        </div>
    );
}

export default Nav;
