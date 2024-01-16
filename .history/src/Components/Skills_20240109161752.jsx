import React from "react";
import {motion} from "framer-motion";
import { Image, Button } from "react-bootstrap";
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
const Skills = () => {

  const images =
  ["https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
  ,"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png"
  ];

  return (
    <motion.div
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <FancyCarousel
      className="text-center" 
      images={images}
      carouselRadius={200}
      peripheralImageRadius={200}
      centralImageRadius={100}
      borderHexColor={'#000000'}
      />
      <Button variant="light">
        <Image 
        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" 
        height="50" 
        width="50"
        />
      </Button>
      <Button variant="light">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png" 
        height="51" 
        width="200"/>
      </Button>
      <Button variant="light">
        <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" 
        height="100" 
        width="50"/>
      </Button>
      <Button variant="light">   
        <Image src="https://www.svgrepo.com/show/374144/typescript.svg" 
        height="50" 
        width="50"/>
      </Button>
      <Button variant="light">       
        <Image src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" 
        height="100" 
        width="100"/>
      </Button>  
        Skills
    </motion.div>
  )
}

export default Skills