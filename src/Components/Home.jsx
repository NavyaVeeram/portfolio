import React from 'react'
import { Link } from 'react-scroll'
import './index.css'
import  Container  from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import  Col  from 'react-bootstrap/Col'

import navya from './assets/photonav.png'

function Home() {
       
    return (
        <>
        <div class="layer-1">
    <div class="rain-drop">⭐</div>
    <div class="rain-drop">⭐</div>
    <div class="rain-drop">🌟</div>
    <div class="rain-drop">⭐</div>
    <div class="rain-drop">⭐</div>
    <div class="rain-drop">🌛</div>
    <div class="rain-drop">⭐</div>
    <div class="rain-drop">⭐</div>
    <div class="rain-drop">🌜</div>
    <div class="rain-drop">⭐</div>
    <div class="rain-drop">⭐</div>
    <div class="rain-drop">✨</div>
    <div class="rain-drop">⭐</div>
    <div class="rain-drop">⭐</div>
    <div class="rain-drop">🌙</div>
  </div>
  <Container className='p-5'>
    <Row>
    <Col className='col-sm-12 col-md-6 col-12'>
        <img src={navya} style={{width:'100%',borderRadius:'50%'}}  alt='home-bg'/>
        </Col>
        <Col className='col-sm-12 col-md-6 col-6'>
        <div className='d-flex flex-column align-items-center p-3 justify-content-center home'>
          <div> <h1 className='name mt-5'> Navya Veeram</h1>
<h4 className='fullstack pt-3 mt-4'>FullStack web Developer</h4>
<p className='pt-5 mb-4'>"Crafting seamless user experiences from front to back, a full stack developer blends creativity with logic, turning lines of code into digital masterpieces."</p>

<Row className='mt-4'>
    <Col>
    <Link as={Link} to="/contact" style={{background:'#c770f0',color:'white',padding:'10px',borderRadius:'10px'}}>Contact Me</Link></Col>
<Col><Link as={Link} to="/resume" style={{background:'white',color:'black',padding:'10px',borderRadius:'10px'}}>Resume</Link></Col>
</Row>
</div>
        </div>
        </Col>
      
        </Row>
        </Container>
       
        
       
        </>
    )
}

export default Home
