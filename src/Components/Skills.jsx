import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiBootstrap } from "react-icons/si";
import { LiaReact } from "react-icons/lia";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import ProgressBar from 'react-bootstrap/ProgressBar'
function Skills() {
  const html = 80;
  const css=70;
  const bootstrap=90;
  const jspt=60;
  const react=55;
  const git=30;

    return (
        <div>
        
         <h1 className='text-center text p-5'> Skills</h1>
         <Container className='m-5'>
  <Container className='d-flex align-items-center justify-content-between mb-3'>
    <span>HTML</span>
    <ProgressBar className='w-50 custom-progress-purple' animated now={html} label={`${html}%`} />
  </Container>

  <Container className='d-flex align-items-center justify-content-between mb-3'>
    <span>CSS</span>
    <ProgressBar className='w-50 custom-progress-purple' animated now={css} label={`${css}%`} />
  </Container>

  <Container className='d-flex align-items-center justify-content-between mb-3'>
    <span>Bootstrap</span>
    <ProgressBar className='w-50 custom-progress-purple' animated now={bootstrap} label={`${bootstrap}%`} />
  </Container>

  <Container className='d-flex align-items-center justify-content-between mb-3'>
    <span>JavaScript</span>
    <ProgressBar className='w-50 custom-progress-purple' animated now={jspt} label={`${jspt}%`} />
  </Container>

  <Container className='d-flex align-items-center justify-content-between mb-3'>
    <span>React js</span>
    <ProgressBar className='w-50 custom-progress-purple' animated now={react} label={`${react}%`} />
  </Container>

  <Container className='d-flex align-items-center justify-content-between mb-3'>
    <span>Git</span>
    <ProgressBar className='w-50 custom-progress-purple' animated now={git} label={`${git}%`} />
  </Container>
</Container>

         <div style={{textAlign:'center',background:'#c770f0',padding:'50px'}}>
         <Container>
      <Row style={{padding:'20px'}}>
      <Col sm={4}><FaHtml5 style={{ fontSize: '100px' }}/></Col>
        <Col sm={8}><b>HTML</b>
<p>HTML, or HyperText Markup Language, is the standard language used to create and design webpages, structuring content with elements like headings, paragraphs, links, and images. It serves as the foundation of web development, allowing developers to define the layout and structure of a website's content.
</p></Col>

      </Row>
      
      <Row style={{padding:'20px'}}>
      <Col sm={4}><FaCss3Alt style={{ fontSize: '100px' }}/></Col>
        <Col sm={8}>
<b>CSS</b>
<p>CSS, or Cascading Style Sheets, is a stylesheet language used to control the presentation and layout of HTML elements on a webpage, enhancing its visual appeal. It allows developers to apply styles such as colors, fonts, spacing, and positioning, creating a more engaging and visually consistent user experience.</p>
</Col></Row>
<Row style={{padding:'20px'}}>
      <Col sm={4}><TbBrandJavascript  style={{ fontSize: '100px' }}/></Col>
        <Col sm={8}>
<b>JavaScript</b>
<p>Experienced in adding interactivity and dynamic behavior to websites using JavaScript, including DOM manipulation, event handling, and form validation.
</p></Col></Row>

<Row style={{padding:'20px'}}>
      <Col sm={4}><SiBootstrap  style={{ fontSize: '100px' }}/></Col>
        <Col sm={8}><b>Bootstrap</b>
<p>Experienced in utilizing Bootstrap to streamline the development process, create responsive layouts, and enhance the visual appeal of web applications.
</p></Col></Row>
<Row style={{padding:'20px'}}>
      <Col sm={4}><LiaReact style={{ fontSize: '100px' }}/></Col>
        <Col sm={8}><b>React.js</b>
<p>Skilled in building robust and scalable web applications with React.js, leveraging its component-based architecture and state management capabilities.
</p></Col></Row>
<Row style={{padding:'20px'}}>
      <Col sm={4}>< FaGitAlt style={{ fontSize: '100px' }}/></Col>
        <Col sm={8}>
<b>Git</b>
<p>Proficient in version control with Git, maintaining clean commit histories, managing branches, and collaborating effectively with team members.
</p>     </Col></Row>
<Row style={{padding:'20px'}}>
      <Col sm={4}>< TbBrandReactNative style={{ fontSize: '100px' }}/></Col>
        <Col sm={8}>
        <b>React Native</b>
        <p>React Native is a framework for building native mobile apps using React and JavaScript, allowing developers to create high-performance, cross-platform apps for Android and iOS devices. </p>
        </Col>
        </Row>
        </Container>
 </div>
        </div>
    )
}

export default Skills
