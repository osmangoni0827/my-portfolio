import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../image/logo.png';
const Navbar = () => {
// //    const active=document.getElementById('menu');
//     const active=(e)=>{
//         const item=e.target;
//         e.target.className='nave-link active';
//         console.log(item.className);
//     }
    return (
        <nav className="navbar fixed-top  navbar-expand-lg navbar-light navbar  ">
        <div className="container-fluid">
            <img src={logo}></img>
            
            <button className="navbar-toggler bg-light text-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarNav">
                <ul className="navbar-nav ms-auto"  id='menu'>
                    <li className="nav-item ">
                        <Link to='/home'   className='nave-link '>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className='nave-link'>About</Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/portfolio' className='nave-link'>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/blog'  className='nave-link' >Blog</Link>
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