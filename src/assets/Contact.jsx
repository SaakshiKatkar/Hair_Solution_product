import React from 'react'
import {  Container ,Row ,Col } from 'react-bootstrap'
import Office from './Office'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Contact() {
  return (
    <>
      <Container fluid>
        <div className="bgimg p-5 text-center mb-4 text-white ">
          <h1 className="fs-1">Contact</h1>
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
              Contact
            </a>
          </div>
        </div>
      </Container>
      <Office />
      <Container>
        <h1 className="fw-light text-center">
          If You Have Any Query,
          <span className="fw-bold" style={{ color: "#90bc79" }}>
            {" "}
            Please{" "}
          </span>
        </h1>
        <h2 className="fw-bold text-center " style={{ color: "#90bc79" }}>
          Contact Us
        </h2>
        <Row className="cnt mt-5 mb-5">
          <Col>
            <p className="text-secondary fs-6">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done.
              <Link to="">Download Now</Link>.
            </p>

            <Row className="mt-4 mb-2">
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Name"
                  className="mb-2"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control "
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Email"
                  className="mb-2"
                >
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="form-control "
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel
              controlId="floatingInput"
              label="Subject"
              className="mb-3"
            >
              <input
                type="text"
                placeholder="Subject"
                className="form-control "
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                className="mb-3"
              />
            </FloatingLabel>

            <Button
              className="px-4 fs-5 w-100 mb-5"
              style={{
                backgroundColor: "#90bc79",
                border: "2px solid #90bc79",
              }}
            >
              Send Message
            </Button>
          </Col>

          <Col>
          {/* Map */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6015254.137594714!2d-76.18347!3d42.594862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1725287384375!5m2!1sen!2sbd" width="550" height="413"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='ms-5'></iframe>



          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact