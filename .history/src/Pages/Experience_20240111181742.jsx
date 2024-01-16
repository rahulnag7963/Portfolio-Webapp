import React from "react";
import {motion} from "framer-motion";
const Experience = () => {
  return (
  <div className="text-center">
    <div className="row mx-auto">
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