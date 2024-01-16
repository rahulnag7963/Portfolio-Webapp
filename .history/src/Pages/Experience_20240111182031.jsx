import React from "react";
import {motion} from "framer-motion";
const Experience = () => {
  return (
  <div className="text-center">
    <div className="row mx-auto">
      <div className="col">
      <motion.button
            className="btn btn-light mt-3"
            whileHover={{ 
              scale: 1.5,
              boxShadow: "0px 0px 8px rgba(255,255,255,1)"
            }}
          >
          <img
            src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/v1397194023/907baba9623ae9ebbe0c000497184bb4.png"
            width="250"
            height="50"
            alt="Global Relay logo"
          />
          </motion.button>
      </div>
      <div className="col">
      <motion.button
            className="btn btn-light mt-2"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0px 0px 8px rgba(255,255,255,1)"
            }}
          >
          <img
            src=""
            width="50"
            height="50"
            alt="Ocean network's logo"
          />
          </motion.button>
      </div>
    </div>
  </div>
  )
}

export default Experience