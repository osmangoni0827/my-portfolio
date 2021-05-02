import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Blog from '../Blog/Blog';

const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Blog></Blog>
            <section style={{color:'white',backgroundColor:'black'}}>
            <Footer color={'#FFFFFF'}></Footer>
            </section>
        </div>
    );
};

export default Blogs;