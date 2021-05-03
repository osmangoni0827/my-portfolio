import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Blog from '../Blog/Blog';
import './blog.css';
const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='blog'>
            <h2>My Blog</h2>
            </div>
            <section style={{color:'white',backgroundColor:'black'}}>
            <Blog></Blog>
            <Footer color={'#FFFFFF'}></Footer>
            </section>
        </div>
    );
};

export default Blogs;