import React from "react";
import {Badge, Card, Container, Image} from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Particle from "../Components/Particle";
import logo from "../Assets/logo.png";
const Home = () => {
  return (
      <div className="text-center p-2">
        <div className="row mx-auto">
          <div className="col">
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
        </div>
        <div className="col"
          >
          <Image className="mt-5" src={logo} width="450" height="450"></Image>
        </div>
        </div>
      </div>
  )
}

export default Home