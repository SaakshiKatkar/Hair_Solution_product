import React from 'react'
import { Col,Container, Row } from 'react-bootstrap'

function Use() {
  return (
    <div>
      
        <Container fluid  className='bgimg text-center mb-5'>
            <Container className='p-5'>
                <h1 className='fw-light w-50 mx-auto d-block'>How To Use Our 
                    <span  className='text-white fw-bold'>Natural & Oraganic</span>Hair Shampoo</h1>
                    <p className='mt-3  text-white w-50 mx-auto d-block'>Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </Container>
            <Row>

            <Col>
               <i  className='fa fa-home fa-3x text-dark border rounded-circle p-4 fs-1'></i>
                   <div className='text-white p-3'>

                    <h4>Wash<span className='border-bottom border-3 pb-2'> Hair with Water</span></h4>
                       <p className='p-3 '>Lorem ipsum dolor sit amet, consectetur 
                         adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        </div>
              </Col>

                  <Col>
                    <i  className='fa fa-home fa-3x text-dark border  rounded-circle p-4 fs-1'></i>
                   <div className='text-white p-3'>

                  <h4>Apply<span className='border-bottom border-3 pb-2'> Shampoo On Hair</span></h4>
                   <p className='p-3'>Lorem ipsum dolor sit amet, consectetur 
                         adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                    </div>
                  </Col>

              <Col>
                <i  className='fa fa-home fa-3x text-dark border rounded-circle p-4 fs-1'></i>
                <div className='text-white p-3'>

                <h4>Wait 5 <span className='border-bottom border-2 pb-2'> Mins And Wash</span></h4>
                <p className='p-3'>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
               </div>
              </Col>

            </Row>

        </Container>
    </div>
  )
}

export default Use