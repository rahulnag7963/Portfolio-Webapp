import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from "../assets/logo.png";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Experience from './Experience';
import Projects from './Projects';
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
            <Nav.Link as={Link} to = "/Skills">Skills</Nav.Link>
            <Nav.Link as={Link} to = "/Projects">Projects</Nav.Link>
            <Nav.Link as={Link} to = "/Experience">Work Experience</Nav.Link>
          </Nav>   
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/Skills" element= {<Skills/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Experience" element={<Experience/>}/>
      </Routes>
    </Router>
  )
}

export default Header