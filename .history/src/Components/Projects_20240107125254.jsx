import {motion} from "framer-motion";
const Projects = () => {
  return (
    <motion.div
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    Projects
    </motion.div>
  )
}

export default Projects