import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from 'react-bootstrap/Button';

function Blogs() {
  return (
    <div>
      <Container fluid className="mb-5">
        <div className="mt-5 p-4 w-50 mx-auto d-block ">
          <h1 className="fw-light text-center">
            From Our
            <span style={{ color: "#90bc79" }} className="fw-bold">
              {" "}
              Blog Articles
            </span>
          </h1>
          <p className="text-center mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            aliquet, erat non malesuada consequat, nibh erat tempus risus.
          </p>
        </div>

        <Row className="pcard">
          <Col>
            <Card className="p-4">
              <Card.Img
                src="./img/blog-1.jpg"
                className="d-block mx-auto w-100 img-fluid"
              />
              <Card.Body>
                <Card.Title>
                  Foods that are good for your hair growing
                </Card.Title>
                <p className="text-secondary">
                  <i className="fa-solid fa-eye"></i>9999 Views{" "}
                  <i className="fa-duotone fa-solid fa-comments"></i>9999
                  comments
                </p>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  aliquet, erat non malesuada consequat.
                </Card.Text>
                <Button className='px-4 fs-5 mt-3 btn1'style={{backgroundColor:"#90BC79",border:"2px solid #90BC79 "}}>
                  Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card className="p-4">
              <Card.Img
                src="./img/blog-2.jpg"
                className="d-block mx-auto w-100 img-fluid"
              />
              <Card.Body>
                <Card.Title>
                  Foods that are good for your hair growing
                </Card.Title>
                <p className="text-secondary">
                  <i className="fa-solid fa-eye"></i>9999 Views{" "}
                  <i className="fa-duotone fa-solid fa-comments"></i>9999
                  comments
                </p>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  aliquet, erat non malesuada consequat.
                </Card.Text>
                <Button className='px-4 fs-5 mt-3 btn1'style={{backgroundColor:"#90BC79",border:"2px solid #90BC79 "}}>
                Read More</Button>
              </Card.Body>
            </Card>
          



          </Col>
          <Col>
          <Card className="p-4">
              <Card.Img
                src="./img/blog-3.jpg"
                className="d-block mx-auto w-100 img-fluid"
              />
              <Card.Body>
                <Card.Title>
                  Foods that are good for your hair growing
                </Card.Title>
                <p className="text-secondary">
                  <i className="fa-solid fa-eye"></i>9999 Views{" "}
                  <i className="fa-duotone fa-solid fa-comments"></i>9999
                  comments
                </p>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  aliquet, erat non malesuada consequat.
                </Card.Text>
                <Button className='px-4 fs-5 mt-3 btn1'style={{backgroundColor:"#90BC79",border:"2px solid #90BC79 "}}>
                  Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blogs;
