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
  
  const title= ['React', 'Java', 'SpringBoot', 'Typescript', 'MongoDB'];
  const description= [
    'Over 3 years of experince. Built several projects'
    +'and worked 1 year in multiple companies, providing'
    +'me with a large amount of experience with the framework',
    '',
    '',
    '',
    ''
  ]


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
      <p className="display-6"> {title[focusElement]} </p>
      <div>{description[focusElement]}</div>
    </motion.div>
  )
}

export default Skills