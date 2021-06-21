import React from 'react';
import BlogInformation from '../BlogInformation/BlogInformation';
import InterveiwImage from '../../../image/interviewquestion.png';
import ReactImage from '../../../image/react-ui-component-libraries-frameworks.jpg';
import JavascriptImage from '../../../image/Javascript.jpg';

const BlogInfo=[
    {
        title:'10 Importance Topic for Javascript Developer',
        description:'JavaScript supports valuable skills such as object-oriented, functional, and imperative styles of programming. Beginner developers',
        image:JavascriptImage,
        link:"https://osmangoni0827.medium.com/10-importance-topic-for-javascript-developer-6bf53c5a25a1"
    },
    {
        link:"https://osmangoni0827.medium.com/core-concept-of-react-c120deab5d07",
        image:ReactImage,
        title:'Core Concept of React library',
        description:'React is an open-source JavaScript library that helps you build a top interface for both the web as well as mobile apps',
    },
    {
        link:"https://osmangoni0827.medium.com/javascript-interview-question-for-job-sicker-39efed3b8aaf",
        image:InterveiwImage,
        title:'Javascript Interview Question for Job sicker',
        description:'JavaScript, also abbreviated as JS, is a high-level server-side programming language. JavaScript is widely used worldwide to build various web applications',
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