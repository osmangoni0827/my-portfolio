import React from 'react';
import ProjectINformation from '../ProjectInformation/ProjectINformation';
import './Project.css';
//All Image Import
import ProService1 from '../../../image/pro1.JPG';
import ProService2 from '../../../image/pro2.JPG';
import ProService3 from '../../../image/pro3.JPG';

import clothwebsite1 from '../../../image/cloth1.JPG';
import clothwebsite2 from '../../../image/cloth2.JPG';
import clothwebsite3  from '../../../image/cloth3.JPG';

import techzone1 from '../../../image/tec1.JPG';
import techzone2 from '../../../image/tec2.JPG';
// import NodeImage from '../../../image/NodejsBanner-1-1.jpg';
const ProjectInfo=[
    {
        name:'Pro Servicing',
        date:'March 2021',
        image1:ProService1,
        image2:ProService2,
        image3:ProService3,
        description1:'This is a Complete Responsive Website. Users will be able to order for servicing of different types of devices',
        description2:'Users need to log in to the website to place an order',
        description3:'Users of this website can give reviews if their order is completed',
        description4:'Website admin can add new services if they want',
        LiveSite:'https://pro-servicing.web.app/',
        GitHub:'https://github.com/osmangoni0827/pro-servicing',
        Technology:["React js", "Hook Form", "Node.js", "Express.js", "MongoDB", "firebase", "Heroku", "Bootstrap", "CSS", "HTML"]
    },
    {
        name:'ELEMENTARY CLOTH STORE',
        date:'April 2021',
        image1:clothwebsite1,
        image2:clothwebsite2,
        image3:clothwebsite3,
        description1:'It is a responsive React Web app',
        description2:'it is a Cloth Store Website. You can order new clothes',
        description3:'Website Control By Admin Panel',
        description4:'Website admin can add new Cloths and delete any type of cloths from this website',
        LiveSite:'https://pro-servicing.web.app/',
        GitHub:'https://github.com/osmangoni0827/elementary-cloth-store-client',
        Technology:["HTML","CSS ", "React.js", "Bootstrap",  "React Hook Form", "firebase", "Node.js", "Express.js","MongoDB"]
    },
    {
        name:'TECH- ZONE',
        date:'Fabruary 2021',
        image1:techzone1,
        image2:techzone2,
        image3:'',
        description1:'It is a Complete e-comers Website. Orders are taken here for the sale of various types of technology device',
        description2:'Users need to log in to the website to place an order',
        description3:'Admin can add new product in website',
        LiveSite:'https://tech-zone-22c56.web.app/',
        GitHub:'https://github.com/osmangoni0827/Tech-Zone',
        Technology:["React.js", "firebase"," Node.js", "Express.js", "MongoDB", "Bootstrap", "CSS","HTML"]
    },
]
const Project = () => {
    return (
        
        <div className='d-flex justify-content-center'>
        <div className='project'>
            <h2>My Projects</h2>
            {
                ProjectInfo.map(info=><ProjectINformation info={info}></ProjectINformation>)
            }
        </div>
        </div>
       
    );
};

export default Project;