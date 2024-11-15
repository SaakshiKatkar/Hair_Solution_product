import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Header() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cart").then((res1) => {
      res1.json().then((res2) => {
        console.log(res2);
        setCart(res2);
      });
    });
  });

  return (
    <>
      <Container fluid>
        <div className="fs-5 ">
          <Navbar className="   p-3  bgimg" data-bs-theme="dark">
            <Container>
              <Navbar.Brand to="/" className="fs-3 mt-2">
                Hairnic
              </Navbar.Brand>
              <Nav className="">
                <Link to="/" className="mt-2">
                  Home
                </Link>
                <Link to="/About" className="mt-2">
                  About
                </Link>
                <Link to="/Shampoo" className="mt-2">
                  Product
                </Link>

                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <Link to="/Feactures" className="bg-white dropdown-item">
                    Feactures
                  </Link>
                  <Link to="/Htuse" className="bg-white dropdown-item">
                    How To Use
                  </Link>
                  <Link to="/Testimonial" className="bg-white dropdown-item">
                    Testimonial
                  </Link>
                  <Link to="/Articles" className="bg-white dropdown-item">
                    Blog Articles
                  </Link>
                  <Link to="/Notfound" className="bg-white dropdown-item">
                    404 Page
                  </Link>
                </NavDropdown>

                <Link to="/Contact" className="mt-2">
                  Contact
                </Link>
                <Button variant="dark">Shop Now</Button>
                <Link to="/Cart" className="mt-2">
                  <i className="fa-solid fa-cart-shopping ms-3"></i>
                  <sup>{cart.length}</sup>
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </Container>
    </>
  );
}
export default Header;
