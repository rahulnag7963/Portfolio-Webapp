import React from "react";
import {Badge, Card, Container, Image} from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Particle from "../Components/Particle";
import logo from "../Assets/logo.png";
const Home = () => {
  return (
      <div className="text-center p-2">
        <Container>
        <Particle/>
            <TypeAnimation className="display-1"
            sequence={[
            'Welcome to my Portfolio!',
            1000,
            'My name is Rahul and I am web developer',
            1000,
            'My name is Rahul and I am a react enthusiast',
            1000,
            'My name is Rahul and I am a full stack developer',
            1000
            ]}
            speed={0.5}
            repeat={Infinity}
            />
        </Container>
        <Badge bg="light">
          <Image src={logo} width="50" height="50"></Image>
        </Badge>
      </div>
  )
}

export default Home