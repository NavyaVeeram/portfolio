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
  <Container className='p-5'>
    <Row>
    <Col className='col-sm-12 col-md-6 col-12'>
        <img src={navya} style={{width:'100%',borderRadius:'50%'}}  alt='home-bg'/>
        </Col>
        <Col>
        <div className='d-flex flex-column align-items-center p-3 justify-content-center home'>
          <div> <h1 className='name mt-5'> Navya Veeram</h1>
<h4 className='fullstack pt-3 mt-4'>FullStack web Developer</h4>
<p className='pt-5 mb-4'>"Crafting seamless user experiences from front to back, a full stack developer blends creativity with logic, turning lines of code into digital masterpieces."</p>

 <Link as={Link} to="/contact" style={{background:'#c770f0',color:'white',padding:'10px',borderRadius:'10px',margin:'4px'}}>Contact Me</Link>
<Link as={Link} to="" style={{background:'white',color:'black',padding:'10px',borderRadius:'10px'}} target="_blank">Resume</Link>

</div>
        </div>
        </Col>
      
        </Row>
        </Container>
       
        
       
        </>
    )
}

export default Home
