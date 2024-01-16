import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
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
            className="m-2 btn btn-light"
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
        </Navbar.Brand>
        <Container>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to = "/Skills">
                <motion.div
                  whileHover={{
                    scale: 1.3, 
                    color:'rgba(84,180,211,1)'
                  }}
                >
                  Skills
                </motion.div>
              </Nav.Link>
              <Nav.Link as={Link} to = "/Projects">
                <motion.div
                    whileHover={{
                      scale: 1.3, 
                      color:'rgba(84,180,211,1)'
                    }}
                  >
                  Projects
                </motion.div>
              </Nav.Link>
              <Nav.Link as={Link} to = "/Experience">
                <motion.div
                    whileHover={{
                      scale: 1.3, 
                      color:"rgba(84,180,211,1)"
                    }}
                  >
                  Experience
                </motion.div>
              </Nav.Link>
              <Nav.Link as={Link} to ="/">
                <motion.div
                  whileHover={{
                    scale: 1.3, 
                    color:'rgba(84,180,211,1)'
                  }}
                > 
                  Contact Info
                </motion.div>
              </Nav.Link>
            </Nav>
            <div className="p-2">
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
              <a className="m-2" href="https://github.com/rahulnag7963">
                <motion.img
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
            </div>   
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