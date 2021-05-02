import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin,faYoutube,faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <section className='footer'>
        <p>Mohammad Osman Goni  All Rights Reserved</p>
        <div >
            <a target ='_blank' href='https://www.facebook.com/mohammadosman.goni.505/'>
            <FontAwesomeIcon className='icon' icon={faFacebook} size='2x' color='black'/>
            </a>
            <a target ='_blank' href='osmangoni0827@gmail.com'>
            <FontAwesomeIcon className='icon' icon={faEnvelope} size='2x' color='black'/>
            </a>
            <a target ='_blank' href='https://github.com/osmangoni0827'>
            <FontAwesomeIcon className='icon' icon={faGithub} size='2x' color='black'/>
            </a>
            <a target ='_blank' href='https://www.linkedin.com/in/mohamad-osman-goni-030819190/'>
            <FontAwesomeIcon className='icon' icon={faLinkedin} size='2x' color='black'/>
            </a>
            <a target ='_blank' href=''>
            <FontAwesomeIcon className='icon' icon={faTwitter} size='2x' color='black'/>
            </a>
            <a target ='_blank' href='https://www.youtube.com/channel/UCdArScz-q64qEKFIuGS3teA'>
            <FontAwesomeIcon className='icon' icon={faYoutube} size='2x' color='black'/>
            </a>

        </div>
   </section>
    );
};

export default Footer;