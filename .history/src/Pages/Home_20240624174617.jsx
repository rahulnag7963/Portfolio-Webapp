import React from "react";
import {Container, Image, Row, Col} from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Particle from "../Components/Particle";
import logo from "../Assets/logo.png";
import { motion } from "framer-motion";
import {animations} from "../Components/Animations";
const Home = () => {
  return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Container>
        <Row>
          <Col xs={8}>
            <Particle/>
            <TypeAnimation className="display-6 text-center"
              sequence={[
              'Welcome to my Portfolio!',
              1000,
              'My name is Rahul and I am a web developer',
              1000,
              'My name is Rahul and I am a react enthusiast',
              1000,
              'My name is Rahul and I am a full stack developer',
              1000
              ]}
              speed={0.5}
              repeat={Infinity}
            />
          </Col>
          <Col>
            <Image src={logo} width="250" height="25-"></Image>
          </Col>
        </Row>
        </Container>
      </motion.div>
  )
}

export default Home