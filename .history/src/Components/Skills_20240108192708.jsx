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
        <Image 
        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" 
        height="50" 
        width="50"
        />
        <Image src="https://www.dariawan.com/media/images/tutorial-spring-logo.width-400.png" 
        height="70" 
        width="100"/>
        <Image src="" height="50" width="200"/>
        <Image src="" height="50" width="50"/>
        Skills
    </motion.div>
  )
}

export default Skills