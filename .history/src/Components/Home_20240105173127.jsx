import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import {motion} from "framer-motion";
const Home = () => {
  return (
    <Container>
        <Row className="">
            <Col>
                <motion.div>
                    hey
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