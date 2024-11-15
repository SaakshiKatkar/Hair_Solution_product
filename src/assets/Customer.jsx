import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


import { Container } from 'react-bootstrap'

function Customer() {
  return (
    <div>
        <Container fluid className='bgimg mt-5 text-center text-white p-5 mb-5'>
            <div className='w-50 mx-auto d-block'>
            <h1 className='fw-bold text-white '>Our Customer Said <span className='text-dark fw-light'>About Our Natural Shampoo</span>
            </h1>
            <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                </div>

            
            <Carousel>

      <Carousel.Item>
        <img src='./img/testimonial-1.jpg' alt='' className='img-fluid mx-auto d-block rounded-circle border p-2'/>
       <p className='fs-4 text-center mt-4 mx-auto d-block fw-light w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, 
        nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. 
        Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</p>
       
        <h5 className='text-dark'> Client Name</h5>
        <p><em>Profession</em></p>
        


      </Carousel.Item>

      <Carousel.Item>
      <img src='./img/testimonial-2.jpg' alt='' className='img-fluid mx-auto d-block rounded-circle border p-2'/>
      <p className='fs-4 mt-4 mx-auto d-block fw-light w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, 
        nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. 
        Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</p>
        <h5 className='text-dark'> Client Name</h5>
        <p><em>Profession</em></p>

         </Carousel.Item>
     
      <Carousel.Item>
      <img src='./img/testimonial-3.jpg' alt='' className='img-fluid mx-auto d-block rounded-circle border p-2'/>
      <p className='fs-4 mt-4 mx-auto d-block fw-light w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, 
        nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. 
        Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</p>

        <h5 className='text-dark'> Client Name</h5>
        <p><em>Profession</em></p>
         </Carousel.Item>
   
    </Carousel>


        </Container>
    </div>
  )
}

export default Customer