import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../images/FAAMS_logo.png';

const Navbar = () => {
    return(
        <nav className = 'navbar'>
            <div className = 'logo'>
                <img src = {logo} alt = 'logo' style={{width:'50%', height:'auto'}} />
            </div>
            <ul className = 'navbar-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/scholarships">Scholarships</Link></li>
                <li><Link to="/donations">Donations</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login" className='login-text'>Login</Link></li>
            </ul>

        </nav>
    )
}

export default Navbar;