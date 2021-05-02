import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../image/logo.png';
const Navbar = () => {
    return (
        <nav className="navbar fixed-top  navbar-expand-lg navbar-light navbar w-100 ">
        <div className="container-fluid">
            <a className="navbar-brand" style={{color:'white'}} href="#">
                <img src={logo}></img>
            </a>
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-end" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to='/home' className='nave-link'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/portfolio' className='nave-link'>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/blog' className='nave-link'>Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className='nave-link'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className='nave-link'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;