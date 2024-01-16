import {motion} from "framer-motion";
import { Card, ListGroup, Container } from "react-bootstrap";
const Contact = () => {
  return (
    <div className="pt-4">
      <div className="display-3 text-center pb-4">
        Contact Information
      </div>
      <Container>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <div className="fw-bold">
                Email:
              </div>
              rahulnag7963@gmail.com
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="fw-bold">
                Phone Number:
              </div>
              780-880-3254
            </ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </div>
  )
}

export default Contact