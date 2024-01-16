import React from 'react';
import {Navbar, Badge, Nav, Container} from "react-bootstrap";
import logo from "../assets/logo2.png";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Experience from './Experience';
import Projects from './Projects';
import Home from './Home';
import Skills from './Skills';
import { motion } from "framer-motion"
const Header = () => {
  return (
    <Router>
      <Navbar bg="light">
        <Navbar.Brand>
          <div 
            className="bg-image hover-overlay shadow-1-strong rounded"
            data-mdb-ripple-init
            data-mdb-ripple-color="light"
          >
            <img
            src={logo}
            width="50"
            height="50"
            alt="Rahul's logo"
            />
            <a href="/">
              <div class="mask" style="background-color: hsla(0, 0%, 98%, 0.2)"></div>
            </a>
          </div>
        </Navbar.Brand>
        <Container>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to ="/">Home</Nav.Link>
              <Nav.Link as={Link} to = "/Skills">Skills</Nav.Link>
              <Nav.Link as={Link} to = "/Projects">Projects</Nav.Link>
              <Nav.Link as={Link} to = "/Experience">Work Experience</Nav.Link>
            </Nav>   
          </Navbar.Collapse>
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