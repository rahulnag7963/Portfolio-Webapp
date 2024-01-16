import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import {motion} from "framer-motion";
const Home = () => {
  return (
    <Container>
        <Row className="">
            <Col>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{
                        duration:2,
                        delay:1
                    }}
                >
                    Hi my name is Rahul!
                    Welcome to my Portfolio!
                </motion.div>
            </Col>
            <Col>
            Hello
            </Col>
        </Row>

    </Container>
  )
}

export default Home