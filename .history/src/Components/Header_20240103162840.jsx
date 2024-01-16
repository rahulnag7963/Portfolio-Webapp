import React from 'react'
import {Navbar, Container} from "react-bootstrap"
import logo from "../assets/logo.png"
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand>
                <img
                src={logo}
                width="00"
                height="90"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default Header