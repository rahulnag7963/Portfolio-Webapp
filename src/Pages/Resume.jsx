import React from 'react'
import { Container } from 'react-bootstrap'
import resume from "../Assets/resume.pdf"
import {motion} from "framer-motion"
import {animations} from "../Components/Animations"
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
            <iframe  id="resume" title="my resume"className="p-3"src={resume} height="500" width="1200"/>
        </Container>
    </motion.div>
  )
}

export default Resume