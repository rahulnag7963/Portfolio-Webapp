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
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </div>
  )
}

export default Contact