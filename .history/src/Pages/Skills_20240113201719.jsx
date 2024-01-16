import {useState} from "react";
import Particle from "../Components/Particle";
import FancyCarousel from "react-fancy-circular-carousel";
import './Skills.css'
import { Card } from "react-bootstrap";
import { animations } from "../Components/Animations";
import {motion} from "framer-motion";
const Skills = () => {
  
  const [focusElement, setFocusElement] = useState(0);

  const images =
  ["https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
  ,"https://cdn-icons-png.flaticon.com/512/5968/5968231.png"  
  ,"https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png"
  ,"https://www.svgrepo.com/show/374144/typescript.svg"
  ,"https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
  ];
  
  const title= ['React', 'Java', 'SpringBoot', 'Typescript', 'MongoDB'];
  const description= [
    'Over 3 years of experince. Built several projects'
    +' and worked 1 year in multiple companies, providing'
    +' me with a large amount of experience with the framework.',
    'First language learned in university. Over 4 years of'
    +' experience with the language, created projects and spent.'
    +' 1 year at mutiple companies applying the skills developed in class',
    'Over 4 months of experience. Used framework in professional environment to build middleware'
    +' and backend endpoints for login credentials.'
    ,
    ' 1 year of experience applying typescript to different'
    +' projects in the workplace. Used alongside react for'
    +' different projects in the workplace.',
    ' Developed a side project using mongoDB as the backend'
    +' using express as the middle ware to connect to the frontend.'
  ]


  return (
    <motion.div 
    variants={animations}
    initial="initial"
    animate="animate"
    exit="exit"
    className="row"
    style={{margin: "auto"}}
    >
      <div className="display-4 text-center">Skills</div>
      <div className="col">
      <Particle/>
      <FancyCarousel
      className="carousel"
      images={images}
      setFocusElement={setFocusElement}
      carouselRadius={200}
      peripheralImageRadius={40}
      centralImageRadius={40}
      border={false}
      navigationButtonBgColor={'54b4d3'}
      navigationButtonStyling={{marginLeft:'265px', marginTop:'80px'}}
      />
      </div>
      <div className="col align-self-center text-center">
        <Card className=""style={{ width: '30rem' }}>
          <p className="display-4 m-2"> {title[focusElement]} </p>
          <div className="display-6 p-2">{description[focusElement]}</div>
        </Card>
      </div>
    </div>
  )
}

export default Skills