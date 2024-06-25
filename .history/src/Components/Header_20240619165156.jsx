import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import logo from "../Assets/logo2.png";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { motion } from "framer-motion"
import AnimatedRoutes from './AnimatedRoutes';
import { ReactComponent as List} from '../Assets/list.svg';

const Header = () => {
  return (
    <Router>
      <Navbar bg="light">
        <Navbar.Brand>
          <Nav.Link as={Link} to = "/">
            <motion.button
              className="btn btn-light"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "10px 10px 8px rgba(84,180,211,1)"
              }}
            >
              <img
                src={logo}
                width="50"
                height="50"
                alt="Rahul's logo"
              />
            </motion.button>
          </Nav.Link>  
        </Navbar.Brand>
              <a className="" href="https://www.linkedin.com/in/rahul-nagulapally-8250a5196/">
                <motion.img
                className="btn btn-light" 
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "10px 10px 8px rgba(84,180,211,1)"
                }}
                src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" 
                alt=""
                width="60"
                height="50"
                />
              </a>
              <a className="" href="https://github.com/rahulnag7963">
                <img
                className="btn btn-light"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "10px 10px 8px rgba(84,180,211,1)"
                }} 
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="" 
                width="60"
                height="50"
                />
              </a>  
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AnimatedRoutes/>
    </Router>
  )
}

export default Header