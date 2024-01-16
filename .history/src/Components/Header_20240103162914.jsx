import React from 'react'
import {Navbar, Container} from "react-bootstrap"
import logo from "../assets/logo.png"
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" variant="dark">
        <Container>
            <Navbar.Brand>
                <img
                src={logo}
                width="90"
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