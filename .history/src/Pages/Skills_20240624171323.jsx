import {useState} from "react";
import { Alert, Container, Row, Col, Image, ProgressBar, Button } from "react-bootstrap";
import { animations } from "../Components/Animations";
import {motion} from "framer-motion";
const Skills = () => {
  const [skill, setSkill] = useState(-1);
  const [show, setShow] = useState(false);
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
    + ' different use cases such as testing or creating new components.'
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
        <Row className="p-2">
          <Col className="d-grid gap-2">
            <Button size="lg"className="p-3 m-2" onClick={()=>setShow(true)}>
              <Image src={images[0]} wdith="35" height="35"/>
              {' '}
            </Button>
          </Col>
          <Col xs={8}>
            <h1 className="text-left display-6">React</h1>
            <ProgressBar animated now={95}/>
          </Col>
          <Alert show={show} variant="primary">
            <p>
              {description[0]}
            </p>
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-primary">
                Close
              </Button>
            </div>
          </Alert>
        </Row>
        <Row className="p-2">
          <Col className="d-grid gap-2">
            <Button size="lg" variant="secondary"className="p-3 m-2" onClick={()=>setShow(true)}>
            <Image src={images[1]} wdith="50" height="50"/>
            {' '} More info
            </Button>
          </Col>
          <Col xs={8}>
            <h1 className="text-left display-6">{title[1]}</h1>
            <ProgressBar animated now={90} variant="secondary"/>
          </Col>
          <Alert show={show} variant="secondary">
            <p>
              {description[1]}
            </p>
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-secondary">
                Close
              </Button>
            </div>
          </Alert>
        </Row>
        <Row className="p-2">
          <Col className="d-grid gap-2">
            <Button size="lg" variant="success"className="p-3 m-2" onClick={()=>setShow(true)}>
            <Image src={images[2]} wdith="50" height="50"/>
            {' '} More info
            </Button>
          </Col>
          <Col xs={8}>
            <h1 className="text-left display-6">{title[2]}</h1>
            <ProgressBar animated now={80} variant="success"/>
          </Col>
          <Alert show={show} variant="success">
            <p>
              {description[2]}
            </p>
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close
              </Button>
            </div>
          </Alert>
        </Row>
        <Row className="p-2">
          <Col className="d-grid gap-2">
            <Button size="lg" variant="info"className="p-3 m-2" onClick={()=>setShow(true)}>
              <Image src={images[3]} wdith="50" height="50"/>
              {' '} More info
            </Button>
          </Col>
          <Col xs={8}>
            <h1 className="text-left display-6">{title[3]}</h1>
            <ProgressBar animated now={90} variant="info"/>
          </Col>
          <Alert show={show} variant="info">
            <p>
              {description[3]}
            </p>
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close
              </Button>
            </div>
          </Alert>
        </Row>
        <Row className="p-2">
          <Col className="d-grid gap-2">
            <Button size="lg" variant="warning"className="p-3 m-2" onClick={()=>setShow(true)}>
              <Image src={images[4]} wdith="50" height="50"/>
              {' '} More info
            </Button>
          </Col>
          <Col xs={8}>
            <h1 className="text-left display-6">{title[4]}</h1>
            <ProgressBar animated now={70} variant="warning"/>
          </Col>
          <Alert show={show} variant="warning">
            <p>
              {description[4]}
            </p>
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-warning">
                Close
              </Button>
            </div>
          </Alert>
        </Row>  
        </Container>
      </motion.div>
    </Container>
  )
}

export default Skills