import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Notfound() {
  return (
    <>
      <Container fluid>
        <div className="bgimg p-5 text-center mb-4 text-white ">
          <h1 className="fs-1">404 Error</h1>
          <div className="d-flex align-items-center justify-content-center">
            <a href="#" className="text-white ms-2">
              Home
            </a>
            /
            <a href="#" className="text-white ms-2">
              Pages
            </a>
            /
            <a href="#" className="text-white ms-2">
              404 Error
            </a>
          </div>
        </div>
      </Container>


      <Container className='mt-5 mb-5 text-center'>
          

          <i className='bi bi-exclamation-triangle display-1 text-primary fs-1'  style={{backgroundColor:"#90bc79"}}></i>
            
            <h1 className='fw-bold'>404</h1>
            <h3 className='fw-bold'>Page Not Found</h3>
            <p>We’re sorry, the page you have looked for does not exist in our website! <p>Maybe go to our home page or try to use a search?</p></p>
            <Button className='px-4 fs-5 mt-2' style={{backgroundColor:"#90bc79", border:"2px solid #90bc79"}}>Go Back To Home</Button>

         
      </Container>
    </>
  );
}

export default Notfound