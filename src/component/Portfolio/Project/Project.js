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

import ripemango1 from '../../../image/ripemango1.JPG';
import ripemango2 from '../../../image/ripemango2.JPG';
import ripemango3 from '../../../image/Capture2.JPG';
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
        name:'RIPE MANGO SHOP',
        date:'June 2021',
        image1:ripemango1,
        image2:ripemango2,
        image3:ripemango3,
        description1:'It is a e-commerce app. Collection of Different Type of Mangoes.',
        description2:'Individual Description for each Mango product.Choosing Quantity of order',
        description3:'You can add new product from dashboard and seen the total orders. In this app use the firebase auth.',
        LiveSite:'https://ripe-mango-shop.web.app/',
        GitHub:'https://github.com/osmangoni0827/Ripe-Mango-Shop',
        Technology:["React.js","Redux","firebase"," Node.js", "Express.js", "MongoDB", "Bootstrap", "Material-UI", "CSS","HTML"]
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