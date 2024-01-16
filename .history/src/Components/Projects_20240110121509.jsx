import { Card, Container, Stack } from "react-bootstrap"
import { motion } from "framer-motion"
const Projects = () => {
  return (
    <div className="p-2 text-center display-6">
        Projects
        <Container>
          <div className="row p-2 mx-auto">
            <div className="col">
              <motion.div 
              className="card"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "10px 10px 8px rgba(84,180,211,1)"
              }}
              >
                hi
              </motion.div>
            </div>
            <div className="col">
            <Card>hey</Card>
            </div>
          </div>  
          <div className="row p-2 mx-auto">
            <div className="col">
              <Card className="">hi</Card>
            </div>
            <div className="col">
            <Card>hey</Card>
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Projects