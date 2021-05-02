import React from 'react';
import './Skill.css';
const Skill = () => {
    return (
       <section className='skills' id='skills'>
          <h2>My Skills</h2>
        <div className='skillType'>
            <h3>Expertise:</h3>
                <div className='skill'>
                <p>Html</p>
                <p>Css</p>
                <p>React Js</p>
                <p>Javascript</p>
                <p>MetrialUi</p>
                <p>Bootstrap</p>
                <p>ES6</p>
                <p>Firebase Auth</p>
                </div>
               
        </div>

        <div className='skillType'>
            <h3>Comfortable:</h3>
            <div className='skill'>
                <p>Node Js</p>
                <p>MongoDB</p>
                <p>SASS</p>
                <p>Firebase</p>
                <p>Express Js</p>
            </div>
        </div>

        <div className='skillType'>
            <h3>Familier:</h3>
            <div className='skill'>
                <p>Next Js</p>
                <p>Redux</p>
                <p>Mongose</p>
            </div>
        </div>


        <div className='skillType'>
            <h3>Tools & Software:</h3>
            <div className='skill'>
                <p>Code Blocks</p>
                <p>Vs Code</p>
                <p>Chrome Dev Tool</p>
                <p>GitHub</p>
                <p>Heroku</p>
                <p>Netpfy</p>
            </div>
        </div>
       </section>
    );
};

export default Skill;