import React from 'react';
import Education from '../Education/Education';
import Skill from '../Skill/Skill';
import Image from '../../../image/osman.jpg';
import './About.css';
import Navbar from '../../Shared/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=''>
                <div className='mt-5 d-flex justify-content-center bg-light'>
                    <div className='Information'>
                        <div className='aboutImage'>
                            <img src={Image} alt=''></img>
                        </div>
                        <div className='intro'>
                            <h1> Mohammad Osman Goni</h1>
                            <h4>Mern Stack Developer</h4>
                            <p>I am a technology enthusiast. I work on software development using JavaScript.
I am learning about JavaScript-based software development technology. I love to take on challenges and be part of the solution.</p>
                        </div>
                        <div className='socialIcon'>
                            <a target='_blank' href='https://www.facebook.com/mohammadosman.goni.505/'>
                                <FontAwesomeIcon className='icon' icon={faFacebook} size='2x' color='black' />
                            </a>
                            <a target='_blank' href='osmangoni0827@gmail.com'>
                                <FontAwesomeIcon className='icon' icon={faEnvelope} size='2x' color='black' />
                            </a>
                            <a target='_blank' href='https://github.com/osmangoni0827'>
                                <FontAwesomeIcon className='icon' icon={faGithub} size='2x' color='black' />
                            </a>
                            <a target='_blank' href='https://www.linkedin.com/in/mohamad-osman-goni-030819190/'>
                                <FontAwesomeIcon className='icon' icon={faLinkedin} size='2x' color='black' />
                            </a>
                            <a target='_blank' href=''>
                                <FontAwesomeIcon className='icon' icon={faTwitter} size='2x' color='black' />
                            </a>
                            <a target='_blank' href='https://www.youtube.com/channel/UCdArScz-q64qEKFIuGS3teA'>
                                <FontAwesomeIcon className='icon' icon={faYoutube} size='2x' color='black' />
                            </a>

                        </div>

                    </div>
                </div>
                <div className='d-flex justify-content-center bg-light'>
                <div className='row mt-5 '>
                    <div className="col-md-6 col-sm-12 col-12">
                        <Skill></Skill>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                        <Education></Education>
                    </div>
                </div>
                </div>
            </div>
            <section style={{color:'black'}} className='bg-light'>
            <Footer color={'#000000'}></Footer>
            </section>
        </div>
        
    );
};

export default About;