import React from 'react'
import { Container } from 'react-bootstrap';
// import resume from
function Resume() {
    const downloadResume = () => {
        const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf';
        window.open(resumeUrl, '_blank');
      };
    return (
        <>

              <div><h1 className='text-center text p-5'> Resume</h1>
                 
        </div>
        <div className='d-flex align-items-center justify-content-center'>
<button onClick={downloadResume} className=' btn' style={{backgroundColor:'#c770f0',color:'white'}}>Download Resume</button>
</div>
<Container className='bg-light text-dark p-5 mt-3'>
    <div className='text-center'>
<h1>Navya Veeram</h1>
<p>Tirupati, Andharpradesh | navyaveeram@gmail.com | 9963362947</p>
<a href="https://www.linkedin.com/in/navya-veeram-85a23a211/">LinkedIn</a> | <a href="https://github.com/NavyaVeeram">Github</a>
</div>
<div>
<h4>CAREER OBJECTIVE</h4>
<hr/>
<p >
Seeking an opportunity as a Python Developer at Avasoft Technologies, where I can
leverage my knowledge and skills to contribute to the development of scalable
applications and enhance my professional growth.</p>
</div>
<div>
<h4>PROJECTS</h4>
<hr />

<p className='d-flex'><span><b>Web scraping using python</b></span><span className='ms-auto'><a href='https://github.com/NavyaVeeram/webscrapping'>View in GitHub</a></span></p> 
<li>
 Extracted valuable data from websites using Python web scraping,
demonstrating automation skills.</li>
<p className='d-flex'><span><b>Data processing project View in GitHub</b></span><span className='ms-auto'><a href='https://github.com/NavyaVeeram/data-processing'>View in GitHub</a></span></p> 

<li> Implemented Python data processing project, transforming raw data into
meaningful insights.</li>
<p className='d-flex'><span><b>
OpenAi chatbot using Django</b></span><span className='ms-auto'><a href='https://github.com/NavyaVeeram/chatbot_using_django'>View in GitHub</a></span></p> 
<ul>
<li> Developed an AI-powered chatbot using Django and OpenAI's GPT-3 model.</li>
<li> Integrated natural language processing for effective user interaction.</li>
<li>Created a user-friendly interface for web and mobile platforms.</li>
</ul>
<p className='d-flex'><span><b>Frontend Application using React js</b></span><span className='ms-auto'><a href='https://github.com/NavyaVeeram/hyrr'>View in GitHub</a></span></p> 

<ul>
<li>Designed and developed a responsive login and sign up forms using React.js.</li> 
<li> Utilized HTML5 a CSS3 for front-end styling and incorporated Git for version control.</li>
</ul>

<p className='d-flex'><span><b>MonX Group Travel Website (React)</b></span><span className='ms-auto'><a href='https://github.com/NavyaVeeram/monx'>View in GitHub</a></span></p> 
Designed and developed a responsive travel website for MonX Group, a fictional travel company, using React.js. The website showcases various destinations, travel packages, and provides a seamless user experience for exploring and planning trips.
<h5><b>Technologies Used:</b></h5>
<ul>
    <li> React.js</li>
    <li>  React Router</li>
    <li>Responsive Web Design (CSS Grid, Flexbox)</li>

</ul>
This project demonstrates my ability to create functional and aesthetically pleasing web applications, combining technical skills with a user-centric approach to deliver a compelling online experience.

</div>
<div>
<h4>CERTIFICATIONS</h4>
<hr/>
Python Fundamentals | HTML, CSS, PHP | React Basics - Great Learning
Web Developer | Web Developer - Think Champ Pvt Limited
Python Internship Certificate - Intern Career
</div>
<div>
<h4>EDUCATION</h4>
<hr/>
<p><b>MCA in Computer Applications (MCA) </b>- Computer Applications 2021 - 2023
Dravidian University (kuppam,Andhra Pradesh)</p>
<p><b>Bachelor of Science (B. Sc.)</b> 2018 - 2021
Sri Venkateswara University (Tirupati,Andhra Pradesh)</p>
<p><b>Board of Intermediate Education</b> 2016- 2018
Sri Chaitanya junior college (Nellore,Andhra Pradesh)</p>
<p><b>Board of Secondary Education </b>2016
TMR HIGH SCHOOL (Nellore,Andhra Pradesh)</p>
</div>
<div>
<h4>SKILLS</h4>
<hr/>
Python | JavaScript | Django | FlaskSQL | PostgreSQL | MongoDB | HTML5 | CSS3 |
React.js (basic understanding) | Git | Jenkins (basic understanding) | Docker (basic
understanding) | Selenium, PyTest | AWS (basic knowledge) | Linux
</div>
<div>
    <h4>Soft SKILLS</h4>
 <hr/>
<ul><li>Strong problem-solving abilities</li>
<li>Effective communication and collaboration within a team
</li>
<li>Detail-oriented with a focus on code quality and organization
</li>
<li>Proactive learner and adaptability to new technologies
</li>
</ul> 

</div></Container>

        </>
    
    )
}

export default Resume
