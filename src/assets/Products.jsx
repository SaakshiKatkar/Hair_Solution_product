import React, { useEffect, useState } from 'react'
import { Col,Row,Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function Products() {
const[shamp,setShamp]=useState([])
const[cart,setCart]=useState([])
useEffect(()=>{
  getprods()
  getcart()


},[])

function getprods()
{
  fetch("http://localhost:3000/prods").then((res1)=>{
    res1.json().then((res2)=>{
      console.log(res2);
      setShamp(res2)
      
    })
  })

}

function getcart()
{
  fetch("http://localhost:3000/cart").then((res1)=>{
    res1.json().then((res2)=>{
      console.log(res2);
      setCart(res2)
      
    })
  })

}

function addtocart(item)
{
  if(cart.some((c)=>c.id===item.id)){
    alert(item.name + " is already added in a cart")

  }
  else{
    fetch("http://localhost:3000/cart",{
      method:"post",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(item)

    }).then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2);
        getcart()
        
      })
    })

  }


}


  return (
    <div>
      <Container fluid className="text-center mt-5 mb-5">
        <h1 className="fw-light">
          Our Natural{" "}
          <span className="fw-bold" style={{ color: "#90bc79" }}>
            Hair Products
          </span>
        </h1>
        <p className="w-50 text-secondary mx-auto d-block mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet,
          erat non malesuada consequat, nibh erat tempus risus.
        </p>
        <Row className="g-3 pcard">
          {shamp.map((item, index) => {
            return (
              <Col key={index}>
                <Card>
                  <Card.Body>
                    <img
                      src={item.image}
                      className="img-fluid mx-auto d-block mb-3"
                    />
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i> (99)
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      <h2 style={{ color: "#90bc79" }}>${item.price}</h2>
                    </Card.Text>
                    <Button className="btn1" onClick={()=>addtocart(item)}>Add To Cart</Button>{" "}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Products