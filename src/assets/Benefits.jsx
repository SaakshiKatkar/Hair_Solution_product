import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Benifits() {
  return (
    <div className='text-center mt-5 mb-5'>
        <Container fluid>
            <h1>Best Benifits Of Our<span className='fw-bold' style={{color:"#90bc79"}}> Natural </span></h1>
            <h2 className='fw-bold'  style={{color:"#90bc79"}}>Hair Shampoo</h2>
            <p className='fs-5 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non<p> malesuada consequat, nibh erat tempus risus.</p></p>
            <Row className='mt-4'>
            <Col>
            {/* Natural and organic */}
            <div className='d-flex'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                <div className='ps-3 text-start'>                   
                    <h4><span className='border-bottom border-3 pb-2'>Natural</span> & Organic</h4>                  
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing <br/>elit aliquet.</p>                  
                </div>
            </div>
            {/* Anti hair fall */}
            <div className='d-flex mt-4'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                <div className='ps-3 text-start'>                   
                    <h4><span className='border-bottom border-3 pb-2'>Anti Hai</span>r Fall </h4>                  
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing <br/>elit aliquet.</p>                  
                </div>
            </div>
            {/* Anti Dandruff */}
            <div className='d-flex mt-4'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                <div className='ps-3 text-start'>                   
                    <h4><span className='border-bottom border-3 pb-2'>Anti-da</span>ndruff</h4>                  
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing <br/>elit aliquet.</p>                  
                </div>
            </div>
            </Col>
            <Col>
            <img src='./img/shampoo.png' alt='' className='img-fluid mx-auto d-block w-100 image'/>
            </Col>
            <Col>
            {/* No internal side effect */}
            <div className='d-flex'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                <div className='ps-3 text-start'>                   
                    <h4><span className='border-bottom border-3 pb-2'>No Inter</span>nal Side Effect</h4>                  
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing <br/>elit aliquet.</p>                  
                </div>
            </div>
            {/* No skin irritation */}
            <div className='d-flex mt-4'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                <div className='ps-3 text-start'>                   
                    <h4><span className='border-bottom border-3 pb-2'>No Skin</span> Irritation </h4>                  
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing <br/>elit aliquet.</p>                  
                </div>
            </div>
            {/* No Artificial smell */}
            <div className='d-flex mt-4'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                <div className='ps-3 text-start'>                   
                    <h4><span className='border-bottom border-3 pb-2'>No Artif</span>icial Smell</h4>                  
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing <br/>elit aliquet.</p>                  
                </div>
            </div></Col>
        </Row>
        </Container>

    </div>
  )
}

export default Benifits