import React from "react";
import {motion} from "framer-motion";
const Experience = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              boxShadow: "0px 0px 8px rgba(255,255,255,1)"
            }}
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
              boxShadow: "0px 0px 8px rgba(255,255,255,1)"
            }}
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
  </div>
  )
}

export default Experience