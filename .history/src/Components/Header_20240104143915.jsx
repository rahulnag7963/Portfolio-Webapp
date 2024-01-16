import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from "../assets/logo.png";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
const Header = () => {
  return (
    <Router>
      <Navbar bg="light">
        <Navbar.Brand>
          <img
          src={logo}
          width="90"
          height="90"
          alt="Rahul's logo"
          href="/"
            />
          </Navbar.Brand>
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to ="/">Home</Nav.Link>
              <Nav.Link as={Link} to = "/Products">Products</Nav.Link>
              <Nav.Link as={Link} to = "/Sell">Sell</Nav.Link>
              <Nav.Link as={Link} to = "/About">About</Nav.Link>
            </Nav>   
          </Container>
      </Navbar>

    </Router>
  )
}

export default Header