import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';

const ProjectItem = ({ title, description, git,mediaSrc, mediaType, githubLink }) => {
  return (
    <Row className='d-flex bg-light text-dark mb-4'>
      <Col>
        <span style={{ fontSize: '30px', color: '#c770f0' }}><b>{title}</b></span>
        <p className='mt-2'><b>Description:</b></p>
        <span className='mt-2' style={{fontFamily:'cursive'}}>{description}</span>
        <Nav.Link href={githubLink} style={{ color: '#c770f0' }}>{git}</Nav.Link>
      </Col>
      <Col className='p-0'>
        {mediaType === 'video' ? (
          <video controls style={{ width: '100%', height: 'auto' }}>
            <source src={mediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={mediaSrc} style={{ width: '100%', height: 'auto' }} alt='project-thumbnail' />
        )}
      </Col>
    </Row>
  );
};

export default ProjectItem;
