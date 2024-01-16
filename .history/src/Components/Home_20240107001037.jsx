import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import {motion} from "framer-motion";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <Container>
        <Row className="text-center">
            <Col>
                <TypeAnimation
                 sequence={[
                    'Welcome to my Portfolio!',
                    1000,
                    'My name is Rahul and I am web developer',
                    1000,
                    'My name is Rahul and I am a react enthusiast',
                    1000,
                    'My name is Rahul and I am a full stack developer',
                 ]}
                 speed={1}
                 repeat={Infinity}

                />
            </Col>
            <Col>
            Hello
            </Col>
        </Row>

    </Container>
  )
}

export default Home