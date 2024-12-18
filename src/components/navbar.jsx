import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
            </div>
            <div className="navbar-center">
                <img src="/portfolio/images/p_logo.png" alt="Description" className='navbar-logo'/>
                <ul className="nav-links">
                    <li>
                        <Link to="/">PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;