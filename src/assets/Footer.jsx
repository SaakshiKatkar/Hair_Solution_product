import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Footer() {
  return (
    <div>
      <Container fluid>
        <div className="bgimg text-center p-5">
          <h1 className="fw-light">
            Let's Subscribe{" "}
            <span className="fw-bold text-white">The Newsletter</span>
          </h1>
          <p className="text-white">
            Subscribe now to get 30% discount on any of our products
          </p>
          <Form.Group
            className="mb-3 w-50 mx-auto d-block mt-5  d-flex align-items-center "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent opacity-50 border-4 border-white px-2 py-3"
            />
            <i
              className="fa-solid fa-paper-plane text-white fs-4 "
              style={{ marginLeft: "-40px" }}
            ></i>
          </Form.Group>
        </div>
        </Container>

        <Container>

        <div>
          <Row className="mt-5 f">
            <Col>
              <a href="#" style={{ color: "#90bc79" }}>
                {" "}
                <h1>Hairnic</h1>{" "}
              </a>
              <p className="fs-5 text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                aliquet, erat non malesuada consequat, nibh erat tempus risus,
                vitae porttitor purus nisl vitae purus.
              </p>
            </Col>
            <Col>
              <h4>Get In Touch</h4>
              <ul className="list-unstyled mt-3">
                <li>
                  <i className="fa-solid fa-location-dot me-3 text-secondary"></i>
                  123 Street, New York, USA
                </li>
                <li className="mt-3">
                  <i className="fa-solid fa-phone  me-3 text-secondary"></i>+012
                  345 67890
                </li>
                <li className="mt-3">
                  <i class="fa-solid fa-envelope me-3 text-secondary"></i>
                  info@example.com
                </li>
              </ul>
              <p className="mt-3 ">
                <a href="#">
                  <i
                    class="fa-brands fa-twitter  rounded-circle  p-2 fs-5 me-2"
                    style={{ border: "3px solid #90bc79" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    class="fa-brands fa-facebook  rounded-circle  p-2 fs-5 me-2"
                    style={{ border: "3px solid #90bc79" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    class="fa-brands fa-instagram  rounded-circle  p-2 fs-5 me-2"
                    style={{ border: "3px solid #90bc79" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    class="fa-brands fa-linkedin-in  rounded-circle  p-2 fs-5 me-2"
                    style={{ border: "3px solid #90bc79" }}
                  ></i>
                </a>
              </p>
            </Col>
            <Col>
              <h4>Our Products</h4>
              <ul className="list-unstyled mt-3">
                <li>
                  <a href="#">
                    <i class="fa-solid fa-greater-than me-2 mt-3"></i>Hair
                    Shining Shampoo
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-greater-than me-2 mt-3"></i>
                    Anti-dandruff Shampoo
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-greater-than me-2 mt-3"></i>Anti Hair
                    Fall Shampoo
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-greater-than me-2 mt-3"></i>Hair
                    Growing Shampoo
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-greater-than me-2 mt-3"></i>Anti smell
                    Shampoo
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <h4>Popular Link</h4>
              <ul className="list-unstyled mt-3">
                <li>
                  <a href="#">
                    <i class="fa-solid fa-greater-than me-2 mt-3"></i>About Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-greater-than me-2 mt-3"></i>Contact Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-greater-than me-2 mt-3"></i>Privacy
                    Policy
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-greater-than me-2 mt-3"></i>Term &
                    Condition
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-greater-than me-2 mt-3"></i>Career
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
          <div className="d-flex ">
            <p className=" w-75 f">
              ©<a href="#">Hairnic</a>, All Right Reserved. Designed and  Distributed by
           <p>   Sakshi Katkar</p>
            </p>
            <Breadcrumb style={{"--bs-breadcrumb-divider": '>'}}>
              <Breadcrumb.Item href="#" >Home |</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Cookies |</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Help |</Breadcrumb.Item>
              <Breadcrumb.Item href="#">FAQs |</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        </Container>
     
    </div>
    
  );
}

export default Footer;
