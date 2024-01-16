import React from "react";
import {motion} from "framer-motion";

const Skills = () => {
  return (
    <motion.div
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        Skills
    </motion.div>
  )
}

export default Skills