import React from 'react';
import './MainHeader.css';
import Typical from 'react-typical'
import MyImage from '../../../../image/osman.jpg';
const MainHeader = () => {

    return (
        <div className='container mainheader'>
           
            <div className='row mt-5'>
                <div className='mt-5 col-md-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 order-sm-1 order-2  d-flex align-items-center justify-content-center'>
                    <div className='Intro '>
                        <h1>I am <br />
                            <span >Mohammad Osman Goni</span>
                        </h1>
                        <h3>
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                Delay ms={500}
                                steps={[
                                    'Web Developer',
                                    1000,
                                    'Full Stack Developer',
                                    1000,
                                    'React Developer',
                                    1000,
                                    'Javascript Programmer',
                                    1000
                                ]}

                            />
                        </h3>
                        <p>
                            I am a junior software developer. I work with JavaScript based font-end and backend frameworks.
                            I am currently working on React
                        </p>
                        
                        <a target='_blank' href='https://www.linkedin.com/in/mohamad-osman-goni-030819190/'>
                        <button className=' mainButton'>Hire Me</button>
                        </a>
                        <a href='https://drive.google.com/uc?export=download&id=1jbKqWxMbkw9Bn3tEtNBrUzCQzlceqoSi'>
                        <button className='mainButton'>Resume</button>
                        </a>
                        
                    </div>
                </div>
                <div className='mt-5 col-md-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 order-sm-2 order-1   d-flex align-items-center justify-content-center'>
                    <div className='Image '>
                        <img src={MyImage}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;