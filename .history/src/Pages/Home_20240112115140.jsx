import React from "react";
import {Container, Image} from "react-bootstrap";
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
          <div className="col">
            <Image src={logo} width="550" height="550"></Image>
          </div>
        </div>
      </div>
  )
}

export default Home