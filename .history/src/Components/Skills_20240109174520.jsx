import React from "react";
import {motion} from "framer-motion";
import FancyCarousel from "react-fancy-circular-carousel";
import './Skills.css'
import { Card, ProgressBar } from "react-bootstrap";
const Skills = () => {

  const images =
  ["https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
  ,"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png"
  ,"https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
  , "https://www.svgrepo.com/show/374144/typescript.svg"
  ,"https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
];

  return (
    <motion.div
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <div className="verticaltext">he</div>
      <FancyCarousel
      navigationButtonStyling={{left:"100"}}
      className="fancy"
      images={images}
      carouselRadius={200}
      peripheralImageRadius={50}
      centralImageRadius={50}
      border={false}
      navigationButtonBgColor={'54b4d3'}
      />
    </motion.div>
  )
}

export default Skills