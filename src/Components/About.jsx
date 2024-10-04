import React from 'react'
import  Container  from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import  Col  from 'react-bootstrap/Col'
import { MdOutlineWavingHand } from "react-icons/md";
function About() {
    return (
        <div>
             <h1 className='text-center text p-5'> About Me</h1>
            <Container className='bg-light text-dark'>
<Row>
<Col className='col-sm-12 col-md-6 col-12'>
    <div>
    <img src='https://img.freepik.com/free-vector/customer-support-flat-illustration_23-2148892786.jpg?t=st=1710089469~exp=1710093069~hmac=044375c1753131a1f8774e42c441fd12186dbe80b0b01d6a9933ff39a4f9024a&w=1060' style={{width:'100%'}} alt='second-home'/>
    </div>
    </Col>
    <Col className='col-sm-12 col-md-6  pt-5'>
    <p style={{fontSize:'20px'}}>
        <h3>LET ME INTRODUCE MYSELF</h3>
        <ul style={{listStyleType:'square'}}>
<li>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</li>

<li>I am fluent in classics like html, css,bootstrap,Javascript and react js</li>

<li>My field of Interest's are building new  Web Technologies</li>
<li>Whenever possible, I also apply my passion for developing products with python and Modern Javascript Library  like React.js</li>
</ul>
</p>
    </Col>
   
</Row>
        </Container>
        <Container className='bg-light text-dark p-5 rounded'>
      <Row>
        <span className='display-3mb-4' style={{color:'#c770f0'}}>Hello there! <MdOutlineWavingHand className='bye' /></span>
        <p className='lead'>I'm <span><b>Navya <span style={{ color: '#c770f0' }}>Veeram</span></b></span>, a passionate and dedicated web developer with a flair for crafting elegant and user-friendly solutions. My journey in the world of programming began with a fascination for turning ideas into interactive and visually appealing websites.</p>

        <h3 className='my-4'style={{color:'#c770f0'}}>What I Bring to the Table:</h3>
        <ul>
          <li><strong>HTML, CSS, Bootstrap:</strong> Proficient in building responsive and visually stunning front-end interfaces that enhance user experience.</li>
          <li><strong>JavaScript:</strong> Adept at creating dynamic and interactive web pages to bring ideas to life.</li>
          <li><strong>PHP and SQL:</strong> Experienced in server-side scripting and database management, ensuring seamless functionality and data management.</li>
          <li><strong>Python and Django:</strong> Skilled in developing robust and scalable web applications using the Django framework.</li>
        </ul>

        <h3 className='my-4' style={{color:'#c770f0'}}>My Approach:</h3>
        <p>I approach every project with a blend of creativity and technical expertise, striving to deliver solutions that not only meet but exceed client expectations. I am constantly learning and adapting to new technologies to stay ahead in this ever-evolving field.</p>

        <h3 className='my-4' style={{color:'#c770f0'}}>Why Work With Me:</h3>
        <ul>
          <li><strong>Passionate Learner:</strong> I am always eager to explore new technologies and methodologies to enhance my skills.</li>
          <li><strong>Problem Solver:</strong> I enjoy tackling challenges and finding innovative solutions to problems.</li>
          <li><strong>Collaborative Spirit:</strong> I thrive in team environments and value collaboration to achieve collective success.</li>
        </ul>

        <h3 className='my-4' style={{color:'#c770f0'}}>Let's Connect!</h3>
        <p>I am currently seeking opportunities to collaborate on exciting projects. Whether you're a fellow developer, a potential client, or just someone interested in tech, feel free to reach out. Let's create something amazing together!</p>
      </Row>
    </Container>  </div>
    )
}

export default About
