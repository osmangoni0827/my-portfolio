import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import './Contact.css';
import ContactInfo from './ContactInfo/ContactInfo';
const Contact = () => {
    return (
        <div className='bg-light'>
            <Navbar></Navbar>
          
          <section style={{color:'black'}} className='bg-light p-5'>
          <ContactInfo></ContactInfo>
            <Footer color={'#000000'}></Footer>
            </section>
        </div>
    );
};

export default Contact;