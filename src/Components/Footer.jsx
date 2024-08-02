import React from 'react'
import  Container  from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-scroll'
function Footer() {
    const emailAddress = 'navyaveeram@gmail.com';
      
    const handleMailClick = () => {
      window.location.href = `mailto:${emailAddress}`;
    };
    return (
        <div>
         <Container>
            <Row className='text-center'>
           <h2> FIND ME ON</h2>
<p>Feel free to connect with me</p>
<Container className='d-flex align-items-center justify-content-center '>
<a href="https://github.com/NavyaVeeram" style={{color:'#c770f0',background:'#fff',borderRadius:'50%',fontSize:'30px',width:"50px",height:'50px'}} className='m-3 fav'><FaGithub/></a>
<Link href="https://www.linkedin.com/in/navya-veeram-85a23a211/" style={{color:'#c770f0',background:'#fff',borderRadius:'50%',fontSize:'30px',width:"50px",height:'50px'}} className='m-3 fav '><FaLinkedin/></Link>
<Link href='' onClick={handleMailClick} style={{color:'#c770f0',background:'#fff',borderRadius:'50%',fontSize:'30px',width:"50px",height:'50px',cursor:'pointer'}} className='m-3 fav'><FaMailBulk /></Link>
<Link href="https://twitter.com/VeeramNavy48770" style={{color:'#c770f0',background:'#fff',borderRadius:'50%',fontSize:'30px',width:"50px",height:'50px'}} className='m-3 fav'><FaTwitterSquare/></Link>

</Container>
<p>@All rights reserved for 2024</p>
            </Row>
        </Container>
        </div>
    )
}

export default Footer
