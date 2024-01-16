import React from "react";
import {motion} from "framer-motion";
import {Container, Image} from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Particle from "../Components/Particle";
import logo from "../Assets/logo.png";
const Home = () => {
  const animations = {
    initial: {opacity: 0, x:100},
    animate: {opacity: 1, x:0},
    exit: {ioacity: 0, x: -100}
  };


  return (
      <motion.div 
        className="text-center p-2"
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{duration: 0.5}}
      >
        <div className="row mx-auto">
          <div className="col">
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
          </div>
          <div className="col">
            <Image src={logo} width="550" height="550"></Image>
          </div>
        </div>
      </motion.div>
  )
}

export default Home