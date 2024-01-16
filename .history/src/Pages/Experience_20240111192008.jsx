import {useState} from "react";
import {motion} from "framer-motion";
import { Offcanvas } from "react-bootstrap";
const Experience = () => {
  
  const [showGlobalRelay, setShowGlobalRelay] = useState(false);
  const handleCloseGlobalRelay = () => setShowGlobalRelay(false);
  const handleShowGlobalRelay = () => setShowGlobalRelay(true);
  
  const [showOceanNetworks, setShowOceanNetworks] = useState(false);
  const handleCloseOceanNetworks = () => setShowOceanNetworks(false);
  const handleShowOceanNetworks = () => setShowOceanNetworks(true);

  return (
  <div className="text-center">
      <div className="display-2 mt-5">
      Experiences
      </div>
    <div className="row mx-auto">
      <div className="col">
        <motion.button
          className="btn btn-light mt-5"
          whileHover={{ 
            scale: 1.3,
            boxShadow: "0px 0px 8px rgba(205, 32, 45, 1)"
          }}
          onClick={handleShowGlobalRelay}
        >
          <img
            src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/v1397194023/907baba9623ae9ebbe0c000497184bb4.png"
            width="250"
            height="70"
            alt="Global Relay logo"
          />
        </motion.button>
      </div>
      <div className="col">
        <motion.button
          className="btn btn-light mt-5"
          whileHover={{ 
            scale: 1.3,
            boxShadow: "0px 0px 8px rgba(22, 157, 192, 1)"
          }}
          onClick={handleShowOceanNetworks}
        >
          <img
            src="https://s3.ca-central-1.amazonaws.com/ehq-production-canada/b1b9048dd4c81a6c1cbeb5044964f29f1cb15e26/original/1648506156/be345def78981d3ddd62d083d9195199_logotext-02.png?1648506156"
            width="250"
            height="70"
            alt="Ocean network's logo"
          />
        </motion.button>
      </div>
    </div>
    <Offcanvas className="bg-danger" show={showGlobalRelay} onHide={handleCloseGlobalRelay} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Global Relay Software Developer Intern</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Worked in Global Relay as a Software developer
          where I developed important soft and hard skills
          below:
          <p>Hard skills:</p>
          <p>- Further developed react skills to industry standards</p>
          <p>
            - Developed skills in Java Spring to create backend 
            endpoints upto industry standards.
          </p>
          <p>
            - Learned to navigate and deal with updating
            new dependencies along with managing a custom 
            UX developed by the comapany.
          </p>
          <p>Soft skills:</p>
          <p>
            - Learned to work in pods in different teams to
            accomplish different tasks (whether frontend or backend
            related) 
          </p>
          <p>
            - Learned to communciate effetively to understand 
            how to manage different tasks depending on the situation
          </p>
        </Offcanvas.Body>
    </Offcanvas>
    <Offcanvas className="bg-info" show={showOceanNetworks} onHide={handleCloseOceanNetworks} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Ocean Networks Canada Junior Software developer Intern</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Worked in Ocean Networks Canada as a software developer
          in the frontend team helping test code, update dependencies, 
          and help where ever necessary.
          <p>Skills developed:</p>
          <p>Hard skills:</p>
          <p>- Further developed react skills to industry standards</p>
          <p>
            - Developed skills in Java Spring to create backend 
            endpoints upto industry standards.
          </p>
          <p>
            - Learned to navigate and deal with updating
            new dependencies along with managing a custom 
            UX developed by the comapany.
          </p>
          <p>Soft skills:</p>
          <p>
            - Learned to work in pods in different teams to
            accomplish different tasks (whether frontend or backend
            related) 
          </p>
          <p>
            - Learned to communciate effetively to understand 
            how to manage different tasks depending on the situation
          </p>  
        </Offcanvas.Body>
    </Offcanvas>
  </div>
  )
}

export default Experience