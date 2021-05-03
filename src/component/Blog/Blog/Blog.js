import React from 'react';
import BlogInformation from '../BlogInformation/BlogInformation';
import NodeImage from '../../../image/NodejsBanner-1-1.jpg';
import ReactImage from '../../../image/react-ui-component-libraries-frameworks.jpg';
import JavascriptImage from '../../../image/Javascript.jpg';

const BlogInfo=[
    {
        title:'Why you learn Javascript Programming',
        description:'JavaScript supports valuable skills such as object-oriented, functional, and imperative styles of programming. Beginner developers',
        image:JavascriptImage,
    },
    {
        image:ReactImage,
        title:'20+ Best React UI Component Libraries / Frameworks for 2021',
        description:'React is an open-source JavaScript library that helps you build a top interface for both the web as well as mobile apps',
    },
    {
        image:NodeImage,
        title:'12 Best Nodejs Frameworks for Web Apps in 2021',
        description:'In 2021, the demand for web applications has increased with more and more businesses employing them to deliver a better user experience.',
    }
]
const Blog = () => {
    return (
        <div className='pt-5'>
            <div className='d-flex justify-content-center'> 
           
           <div className='row p-4'>
                {
                    BlogInfo.map(info=><BlogInformation info={info}></BlogInformation>)
                }
            </div>
        </div>
        </div>
    );
};

export default Blog;