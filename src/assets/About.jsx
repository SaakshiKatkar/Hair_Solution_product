import React from 'react'
import { Container } from 'react-bootstrap'
import Natrual from './Natural'
import Healthyhair from './Healthyhair'


function About() {
  return (
    <>
      <Container fluid>
        <div className="bgimg p-5 text-center mb-4 text-white ">
          <h1 className="fs-1">About Us</h1>
         <div className='d-flex align-items-center justify-content-center'>
          <a href="#" className='text-white ms-2'>Home</a>/
          <a href="#" className='text-white ms-2'>Pages</a>/
          <a href="#" className='text-white ms-2'>About</a>

         </div>
        </div>
        <Natrual/>
        <Healthyhair/>
        
      </Container>
    </>
  );
}

export default About