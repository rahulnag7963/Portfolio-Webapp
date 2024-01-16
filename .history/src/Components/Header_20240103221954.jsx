import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import { useState, useEffect } from "react";
import logo from "../assets/logo.png"
const Header = () => {
  return (
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
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
    </Navbar>
  )
}

export default Header