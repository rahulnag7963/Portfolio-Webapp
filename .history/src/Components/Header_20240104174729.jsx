import React from 'react';
import {Navbar, Image, Nav, Container} from "react-bootstrap";
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
        <Navbar.Brand href="/">
          <motion.button
            className="m-2"
            whileHover={{ scale: 1.1}}
          >
          <Image
            src={logo}
            width="50"
            height="50"
            alt="Rahul's logo"
          />
          </motion.button>
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