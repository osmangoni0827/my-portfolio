import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import MainHeader from '../MainHeader/MainHeader';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <canvas width='1350px' height='340px' style={{pointerEvents:"none",backgroundColor: "transparent", position: "absolute",top:" 0px", left: "0px", width: "100%", height: "100%"}}/>
            <MainHeader></MainHeader>
        </div>
    );
};

export default Header;