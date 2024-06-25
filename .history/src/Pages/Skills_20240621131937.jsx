import {useState} from "react";
import { Card, Container, Row, Col , ProgressBar, Button } from "react-bootstrap";
import { animations } from "../Components/Animations";
import {motion} from "framer-motion";
const Skills = () => {
  const [skill, setSkill] = useState(-1);
  const images =
  ["https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
  ,"https://logolook.net/wp-content/uploads/2022/11/Java-Logo.png"  
  ,"https://static-00.iconduck.com/assets.00/spring-icon-256x256-2efvkvky.png"
  ,"https://www.svgrepo.com/show/374144/typescript.svg"
  ,"https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
  ];
  
  const title= ['React', 'Java', 'SpringBoot', 'Typescript', 'MongoDB'];
  const description= [
      'Over 3 years of experience. Built several projects'
    + ' and worked for a year in multiple companies, providing'
    + ' me with a large amount of experience with the framework.'
    ,
      'First language learned in university. Over 4 years of'
    + ' experience with the language, created projects and spent'
    + ' 1 year at 2 different companies applying the skills developed in class.'
    ,
      ' Over 4 months of experience. Used this specific framework in a professional environment to build middleware'
    + ' and backend endpoints for login credentials and authentication.'
    ,
      ' 1 year of experience applying typescript to different'
    + ' projects in the workplace. Used alongside react for'
    + ' different projects in the workplace such as testing or'
    + ' creating new components.'
    ,
      'Have several months of experience developing a side project using'
    + 'MongoDB as the backend as well as using express as the'
    + 'middleware to connect to the frontend.'

  ]


  return (
    <Container fluid>
      <motion.div 
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      className="row"
      >
        <div className="display-4 text-center pb-5">Skills</div>
        <Container>
        <Row className="text-center p-2">
          <Col className="">
            <Button size="lg"className="p-3 m-2">click</Button>
          </Col>
          <Col xs={8}>
          <h1 className="text-left">React</h1>
          <ProgressBar animated now={75}/>
          </Col>
        </Row>  
        </Container>
      </motion.div>
    </Container>
  )
}

export default Skills