import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import projectpic from '../assets/mernp.jpg'





function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={projectpic} onClick={handleShow} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        
        
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img style={{height:'200px',width:'200px'}} src={projectpic}/>
            </Col>

            <Col md={6}>
             <h2 className='fw-bolder'>Project Title</h2>
             <p>Some quick example text to build on the card title and make up the bulk of</p>
             <p>Language Used: <span className='fw-bolder'>ReactJS, NodeJS, ExpressJS, MongoDB</span></p>
            </Col>
          </Row>

          <div>
            <a href="" className='me-3 btn text-dark'><i class="fa-brands fa-github"></i></a>
            <a href=""  className='me-3 btn text-dark'><i class="fa-solid fa-link"></i></a>
          </div>
        </Modal.Body>
        
      </Modal>
    
    </>
  )
}

export default ProjectCard