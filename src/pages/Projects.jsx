import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Col, Row } from 'react-bootstrap'


function Projects() {
  return (
    <>
      <Header/>
     <div style={{marginTop:'100px'}} className='projects'>
      <h1 className='text-center mb-5'>All Projects</h1>
      <div className='d-flex justify-content-center w-100'>
        <div className='d-flex border w-50 rounded mb-3'>
          <input type="text" className='form-control'  placeholder='search project by technologies'/>
          <i style={{margin:'10px'}} class="fa-solid fa-magnifying-glass"></i>

        </div>

      </div>
      <Row>
        <Col>
        <ProjectCard/>
        </Col>
      </Row>

     </div>
    </>
  )
}

export default Projects