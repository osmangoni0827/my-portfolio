import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Blog from '../Blog/Blog';

const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <section className='p-5' style={{color:'white',backgroundColor:'black'}}>
            <Blog></Blog>
            <Footer color={'#FFFFFF'}></Footer>
            </section>
        </div>
    );
};

export default Blogs;