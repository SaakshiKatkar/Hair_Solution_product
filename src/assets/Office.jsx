import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

function Office() {
  return (
    <>
     <Container>
      <Row className='g-3 mt-5 mb-5'>
            <Col>
            <Card className='text-center '>
                 <Card.Body className='ncard px-3 py-5 border'>
                 <i class="fa-solid fa-location-dot fs-1"></i>
                 <h4 className='text-white mt-4 fw-bolder'>Office Address</h4>
                 <h4 className='text-white mt-2 fw-light'>123 Street, New York, USA</h4>
                
                 </Card.Body>
            </Card>
            
            </Col>
            <Col>
            <Card className='text-center '>
                 <Card.Body className='ncard px-3 py-5 border'>
                 <i class="fa-solid fa-phone fs-1"></i>
                 <h4 className='text-white mt-4 fw-bolder'>Call Us</h4>
                 <h4 className='text-white mt-2 fw-light'>+012 345 67890</h4>
                 </Card.Body>
            </Card></Col>
            <Col>
            <Card className='text-center '>
                 <Card.Body className='ncard px-3 py-5 border'>
                 <i class="fa-solid fa-envelope fs-1"></i>
                 <h4 className='text-white mt-4 fw-bolder'>Mail Us</h4>
                 <h4 className='text-white mt-2 fw-light'>info@example.com</h4>
                 </Card.Body>
            </Card></Col>
        </Row>

      </Container>

    </>
  )
}

export default Office