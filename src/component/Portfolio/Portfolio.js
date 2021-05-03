import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Project from './Project/Project';

const Portfolio = () => {
    return (
        <div>
            <Navbar></Navbar>
           
            <section className='p-5' style={{color:'white',backgroundColor:'black'}}>
            <Project></Project>
            <Footer color={'#FFFFFF'}></Footer>
            </section>
           
        </div>
    );
};

export default Portfolio;