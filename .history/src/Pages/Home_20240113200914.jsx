import React from "react";
import {Container, Image} from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Particle from "../Components/Particle";
import logo from "../Assets/logo.png";
import { motion } from "framer-motion";
import Animations from "../Components/Animations";
const Home = () => {
  return (
      <motion.div
        variants={Animations}
        initial="initial"
        animate="animate"
        exit="exit"
      >
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
      </motion.div>
  )
}

export default Home