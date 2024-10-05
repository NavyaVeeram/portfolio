import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import { FaHome } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { PiTelevisionLight } from "react-icons/pi";
import { RiNewspaperLine } from "react-icons/ri";
// import { BsVectorPen } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand href="/home"><h3 style={{fontWeight:'900',color:'#fff'}}>Navya <span style={{color:'#c770f0'}}>Veeram</span></h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mx-auto">
            <Nav.Link href="/"><span style={{fontSize:'20px',color:'#fff'}}><FaHome/>Home</span></Nav.Link>
            <Nav.Link href="/about"><span style={{fontSize:'20px',color:'#fff'}}><IoPersonOutline />About</span> </Nav.Link>
            <Nav.Link href="/projects"><span style={{fontSize:'20px',color:'#fff'}}><PiTelevisionLight />Projects</span></Nav.Link>
            <Nav.Link href="/skills"><span style={{fontSize:'20px',color:'#fff'}}><GiSkills />Skills</span></Nav.Link>
            <Nav.Link href="/resume"><span style={{fontSize:'20px',color:'#fff'}}><RiNewspaperLine />Resume</span></Nav.Link>
            {/* <Nav.Link href="/blog"><span style={{fontSize:'20px',color:'#fff'}}><BsVectorPen />Blog</span></Nav.Link> */}
    
      
          </Nav>
          <Nav className='ms-auto'>
          <Nav.Link href="https://github.com/NavyaVeeram"><FaGithub style={{fontSize:'40px',color:'#c770f0'}} /></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/navya-veeram-85a23a211/"><FaLinkedin style={{fontSize:'40px',color:'#c770f0'}} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;