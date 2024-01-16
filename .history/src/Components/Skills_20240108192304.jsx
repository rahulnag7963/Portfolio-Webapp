import React from "react";
import {motion} from "framer-motion";
import { Image } from "react-bootstrap";
const Skills = () => {
  return (
    <motion.div
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <Image src="" height="50" width="50"/>
        <Image src="" height="50" width="50"/>
        <Image src="" height="50" width="50"/>
        <Image src="" height="50" width="50"/>
        Skills
    </motion.div>
  )
}

export default Skills