import { Card, Container, Image, Stack } from "react-bootstrap"
import { motion } from "framer-motion"
const Projects = () => {
  return (
      <>
        <div className="p-2 text-center display-6">
          Projects
        </div>  
        <Container className="text-center">
          <div className="row p-2 mx-auto">
            <div className="col">
              <motion.div 
              className="card"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0px 0px 8px rgb(247,247,247)"
              }}
              > 
                <img className="card-img-top"></img>
                <h5 class="card-title display-6">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </motion.div>
            </div>
            <div className="col">
            <motion.div 
              className="card"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0px 0px 8px rgb(247,247,247)"
              }}
              >
                hi
              </motion.div>
            </div>
          </div>  
          <div className="row p-2 mx-auto">
            <div className="col">
            <motion.div 
              className="card"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0px 0px 8px rgb(247,247,247)"
              }}
              >
                <h5 class="card-title display-4">Card title</h5>
                hi
              </motion.div>
            </div>
            <div className="col">
              <motion.div 
              className="card"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0px 0px 8px rgb(247,247,247)"
              }}
              >
                hi
              </motion.div>
            </div>
          </div>
        </Container>
    </>
  )
}

export default Projects