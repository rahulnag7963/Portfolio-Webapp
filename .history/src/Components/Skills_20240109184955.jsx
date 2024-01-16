import {useState} from "react";
import {motion} from "framer-motion";
import FancyCarousel from "react-fancy-circular-carousel";
import './Skills.css'
import springLogo from '../assets/springboot.png'
const Skills = () => {
  
  const [focusElement, setFocusElement] = useState(0);

  const images =
  ["https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
  ,"https://cdn-icons-png.flaticon.com/512/226/226777.png"
  , springLogo
  , "https://www.svgrepo.com/show/374144/typescript.svg"
  ,"https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
  ];
  
  const info = ['React', 'Java', 'Bengaluru', 'Kolkata', 'Chennai'];
  
  return (
    <motion.div
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <FancyCarousel
      className="carousel"
      images={images}
      setFocusElement={setFocusElement}
      carouselRadius={200}
      peripheralImageRadius={50}
      centralImageRadius={50}
      border={false}
      navigationButtonBgColor={'54b4d3'}
      navigationButtonStyling={{marginLeft:'225px', marginTop:'80px'}}
      />
      <p className="display-6"> {info[focusElement]} </p>
    </motion.div>
  )
}

export default Skills