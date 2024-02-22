import {useState} from "react";
import {CircleMenuItem, CircleMenu, TooltipPlacement} from "react-circular-menu";
import { Card, Container, Row, Col } from "react-bootstrap";
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
        <Row>
            <Col>
              <CircleMenu
                startAngle={0}
                rotationAngle={180}
                itemSize={8}
                radius={16}
                rotationAngleInclusive={false}
                className="d-flex justify-content-center"
                menuToggleClassName="btn-outline-info"
              >
                <CircleMenuItem
                  onClick={()=>setSkill(0)}
                  tooltip={title[0]}
                  tooltipPlacement={TooltipPlacement.Right}
                >
                  <img src={images[0]} alt="React" className="circle-image" width ="130" height="130"/>
                </CircleMenuItem>
                <CircleMenuItem 
                  onClick={()=>setSkill(1)}
                  tooltip={title[1]}  
                  tooltipPlacement={TooltipPlacement.Right}>
                  <img src={images[1]} alt="Java" className="circle-image" width ="230" height="130"/>
                </CircleMenuItem>
                <CircleMenuItem 
                  onClick={()=>setSkill(2)}
                  tooltip={title[2]}  
                  tooltipPlacement={TooltipPlacement.Top}>
                  <img src={images[2]} alt="SpringBoot" className="circle-image" width ="110" height="110"/>
                </CircleMenuItem>
                <CircleMenuItem
                  onClick={()=>setSkill(3)} 
                  tooltip={title[3]}  
                  tooltipPlacement={TooltipPlacement.Top}>
                  <img src={images[3]} alt="Typescript" className="circle-image" width ="130" height="130"/>
                </CircleMenuItem>
                <CircleMenuItem 
                  onClick={()=>setSkill(4)}
                  tooltip={title[4]}  
                  tooltipPlacement={TooltipPlacement.Top}>
                  <img src={images[4]} alt="MongoDB" className="circle-image" width ="130" height="130"/>
                </CircleMenuItem>
              </CircleMenu>
          </Col>
          <Col>
            { skill >= 0 ? (
            <Card className="text-center">
              <Card.Body>
                <Card.Title className="display-4">{title[skill]}</Card.Title>
                <Card.Text className="fs-3">
                  {description[skill]}
                </Card.Text>
              </Card.Body>
            </Card> 
            ) : (<></>)
            }     
          </Col>
        </Row>
      </motion.div>
    </Container>
  )
}

export default Skills