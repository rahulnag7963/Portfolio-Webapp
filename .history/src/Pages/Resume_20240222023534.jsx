import React from 'react'
import { Container } from 'react-bootstrap'
import {motion} from "framer-motion"
import {animations} from "../Components/Animations"
import resume from "../Assets/resume_img.png";

const Resume = () => {
  return (
    <motion.div
    variants={animations}
    initial="initial"
    animate="animate"
    exit="exit"
    >
        <div className="display-6 text-center">Resume</div>
        <Container fluid className="d-flex justify-content-center">
          <img src={resume} className="image-fluid m-2" alt="resume" height="auto" max-width="100%"/>
        </Container>
    </motion.div>
  )
}

export default Resume