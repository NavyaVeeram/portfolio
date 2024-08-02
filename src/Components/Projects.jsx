import React from 'react';
import Container from 'react-bootstrap/Container';
import ProjectItem from './ProjectItem';
import cheg from './assets/cheg.jpg';
import fish from './assets/fish.mp4';
import css from './assets/css.mp4';
import bootone from './assets/boot1.mp4';
import boottwo from './assets/boot2.mp4';
import bootth from './assets/boot3.mp4';
import hotel from './assets/internpro1.mp4';
import chat from './assets/chatbot.jpg'
import images from './assets/port.jpg'
import keyhouse from './assets/keyhouse.jpg'
import rac from './assets/racold.jpg'
import dash from './assets/dashboard.jpg'
const projects = [
  {
    title: "Very basic - Simple project on Che Guevara html,css",
    description: "A simple HTML and CSS project showcasing a tribute to Che Guevara, highlighting his image and a brief biography.",
    mediaSrc: cheg,
    mediaType: 'image', // Adding mediaType
    githubLink: "https://github.com/NavyaVeeram/htmlproject5"
  },

  {
    title: "Fish Animation",
    description: "This project features an aquarium simulation with numerous animated fish, created using HTML and CSS for a visually engaging experience",
    mediaSrc: fish,
    mediaType: 'video',
  },
  {
    title: "CSS animations",
    description: "A CSS animation project depicting a serene scene with a moving sun, flying birds, and drifting clouds, creating a dynamic and tranquil atmosphere.",
    mediaSrc: css,
    mediaType: 'video',
  },
  {
    title: "Project: SHAR Info Site (Bootstrap+html+css) ",
    description:'A simple informational site about SHAR, created using HTML, CSS, and Bootstrap for a responsive and clean design.',
    mediaSrc: bootone,
    mediaType: 'video', // Adding mediaType
    // githubLink: "https://github.com/NavyaVeeram/htmlproject5"
  },
  {
    title: "Project: Coaching Center Website (Bootstrap+html+css)",
    description:"A simple, responsive website for a coaching center built using HTML, CSS, and Bootstrap, featuring information about courses, schedules, and faculty.",
    mediaSrc: boottwo,
    mediaType: 'video', // Adding mediaType
    // githubLink: "https://github.com/NavyaVeeram/htmlproject5"
  },
  {
    title:'Movie Recommendation system (Bootstrap+html+css+js) ',
    description:'A simple website for a movie recommendation system built using HTML, CSS, Bootstrap, and JavaScript, providing personalized movie suggestions.',
    mediaSrc: bootth,
    mediaType: 'video', // Adding mediaType
    // githubLink: "https://github.com/NavyaVeeram/htmlproject5"
  },
  {
    title:'Hotel Management system (Bootstrap,html,css,js,php,sql) ',
    description:'A  website for a hotel booking system built using HTML, CSS, Bootstrap, JavaScript,php and sql providing personalized booking of rooms in a hotel.',
    mediaSrc: hotel,
    mediaType: 'video', 
    // githubLink: "https://github.com/NavyaVeeram/htmlproject5"
  },
  {
    title:'OPEN AI CHATBOT USING DJANGO',
    description:'A Django-based project that integrates an OpenAI-powered chatbot, providing intelligent conversational interactions and responses.',
    mediaSrc:chat,
    mediaType: 'image',
    git:'view in github', 
    githubLink: "https://github.com/NavyaVeeram/chatbot_using_django"
  },
  {
    title:'PORTFOLIO REACT js',
    description:'A Django-based project that integrates an OpenAI-powered chatbot, providing intelligent conversational interactions and responses.',
    mediaSrc:images,
    mediaType: 'image', 
  },
  {
    title:'Real Estate key house project',
    description:'A comprehensive website for real estate listings, featuring property details, images, and contact information, built using modern web development technologies.',
    mediaSrc:keyhouse,
    mediaType: 'image', 
    git:'view in github',
    githubLink:'https://keyhousee.netlify.app/'
  },
  {
    title:'Racold customer care',
    description:'A detailed website for Racold Geysers, showcasing various models, features, and specifications, designed to assist customers in making informed purchasing decisions.',
    mediaSrc:rac,
    mediaType: 'image', 
    git:'view in github',
    githubLink:'https://racold-customer.netlify.app/'
  },
  {
    title:'Dashboard',
    description:'It is a project assigned by the company at internshala ',
    mediaSrc:dash,
    mediaType: 'image', 
    git:'view in github',
    githubLink:'https://rad-mousse-548e7d.netlify.app/'
  },
];
function Projects() {
  return (
    <>
      <div>
        <h1 className='text-center text p-5'>Projects</h1>
      </div>
      <Container>
      
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            git={project.git}
            mediaSrc={project.mediaSrc}
            mediaType={project.mediaType} // Passing mediaType
            githubLink={project.githubLink}
          />
        ))}
      </Container>
    </>
  );
}

export default Projects;
