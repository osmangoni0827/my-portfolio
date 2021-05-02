import React from 'react';
import { Link } from 'react-router-dom';
import Blog from '../../Blog/Blog/Blog';
import Project from '../../Portfolio/Project/Project';
import Header from '../Header/Header/Header';
import Footer from '../../Footer/Footer';
import './Home.css';
import ContactInfo from '../../Contact/Contact/ContactInfo/ContactInfo';
const Home = () => {
    return (
        <div className='home'>
           <div>
                <Header></Header>
                <section className='projectSection'>
                <Project></Project>
                <a target ='_blank' href='/portfolio'>
                <button className='btn btn-primary homebutton'>More Project</button>
                </a>
                </section>
                <section className='blog-section'>
                <Blog></Blog>
                <a target ='_blank' href='/blog'>
                <button className='btn btn-primary homebutton'>More Blog</button>
                </a>
                </section>
                <section className='contract'>
                <ContactInfo></ContactInfo>
                </section>
                <section className='footerInHome'>
                <Footer color={'#000000'}></Footer>
                </section>
                
           </div>
        </div>
    );
};

export default Home;