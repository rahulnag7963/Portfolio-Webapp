import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import { useState, useEffect } from "react";
import logo from "../assets/logo.png"
const Header = () => {
  return (
    <NavbarclassName="" bg="light">
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
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header