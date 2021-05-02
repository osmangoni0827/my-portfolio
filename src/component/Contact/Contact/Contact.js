import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Contact.css';
import ContactInfo from './ContactInfo/ContactInfo';
const Contact = () => {
    return (
        <div className='bg-light'>
            <Navbar></Navbar>
          <ContactInfo></ContactInfo>
        </div>
    );
};

export default Contact;