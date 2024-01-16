import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import { useState, useEffect } from "react";
import logo from "../assets/logo.png"
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="light">
      <Container>
        <Navbar.Brand>
          <img
          src={logo}
          width="90"
          height="90"
          className=""
          alt="Rahul's logo"
          />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header