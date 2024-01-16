import React from "react";
import {Row, Col, Container, Image} from "react-bootstrap";
import {motion} from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Particle from "./Particle";
import homeImage from "../assets/homeImage2.svg";
const Home = () => {
  return (
    <motion.div
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <Container>
        <Particle/>
            <Row className="text-center">
                <Col>
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
                </Col>
                <Col>
                    <Image src={homeImage}/>
                </Col>
            </Row>
        </Container>
    </motion.div>
  )
}

export default Home