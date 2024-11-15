import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';


function Natural() {
  return (
    <>
    <Container>
        <Row className='g-3 mt-5 mb-5'>
            <Col>
            <Card className='text-center '>
                 <Card.Body className='ncard px-3 py-5'>
                 <i class="fa-solid fa-leaf fs-1 "></i>
                 <h4 className='text-white mt-4 fw-bolder'>100% Natural</h4>
                 </Card.Body>
            </Card>
            
            </Col>
            <Col>
            <Card className='text-center '>
                 <Card.Body className='ncard px-3 py-5'>
                 <i class="fa-solid fa-leaf fs-1 "></i>
                 <h4 className='text-white mt-4 fw-bolder'>Anti Hair Fall</h4>
                 </Card.Body>
            </Card></Col>
            <Col>
            <Card className='text-center '>
                 <Card.Body className='ncard px-3 py-5'>
                 <i class="fa-solid fa-leaf fs-1 "></i>
                 <h4 className='text-white mt-4 fw-bolder'>Hypoallergenic</h4>
                 </Card.Body>
            </Card></Col>
        </Row>
    </Container>
    </>
  )
}

export default Natural