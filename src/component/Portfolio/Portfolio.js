import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Project from './Project/Project';

const Portfolio = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Project></Project>
            <section style={{color:'white',backgroundColor:'black'}}>
            <Footer color={'#FFFFFF'}></Footer>
            </section>
           
        </div>
    );
};

export default Portfolio;