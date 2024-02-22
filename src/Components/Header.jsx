import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import logo from "../Assets/logo2.png";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { motion } from "framer-motion"
import AnimatedRoutes from './AnimatedRoutes';
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
          </Nav.Link>  
        </Navbar.Brand>
          <Navbar.Collapse className="m-4">
            <Nav>
              <Nav.Link as={Link} to = "/Skills">
                <motion.div
                  whileHover={{
                    scale: 1.3, 
                    color:"rgba(84,180,211,1)",
                    textShadow: "10px 10px 8px rgba(84,180,211,1)"
                  }}
                >
                  Skills
                </motion.div>
              </Nav.Link>
              <Nav.Link as={Link} to = "/Projects">
                <motion.div
                    whileHover={{
                      scale: 1.3, 
                      color:"rgba(84,180,211,1)",
                      textShadow: "10px 10px 8px rgba(84,180,211,1)"
                    }}
                  >
                  Projects
                </motion.div>
              </Nav.Link>
              <Nav.Link as={Link} to = "/Experience">
                <motion.div
                    whileHover={{
                      scale: 1.3, 
                      color:"rgba(84,180,211,1)",
                      textShadow: "10px 10px 8px rgba(84,180,211,1)"
                    }}
                  >
                  Experience
                </motion.div>
              </Nav.Link>
              <Nav.Link as={Link} to ="/Resume">
                <motion.div
                  whileHover={{
                    scale: 1.3, 
                    color:"rgba(84,180,211,1)",
                    textShadow: "10px 10px 8px rgba(84,180,211,1)"
                  }}
                > 
                  Resume
                </motion.div>
              </Nav.Link> 
              <Nav.Link as={Link} to ="/Contact">
                <motion.div
                  whileHover={{
                    scale: 1.3, 
                    color:"rgba(84,180,211,1)",
                    textShadow: "10px 10px 8px rgba(84,180,211,1)"
                  }}
                > 
                  Contact
                </motion.div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <AnimatedRoutes/>
    </Router>
  )
}

export default Header