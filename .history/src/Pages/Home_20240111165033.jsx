import React from "react";
import {Container} from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Particle from "./Particle";

const Home = () => {
  return (
    <div
    className="text-center p-2"
    >
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
  )
}

export default Home