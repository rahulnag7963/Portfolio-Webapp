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
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png" 
        height="51" 
        width="200"/>
        <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" 
        height="100" 
        width="50"/>
        <Image src="" height="50" width="50"/>
        Skills
    </motion.div>
  )
}

export default Skills