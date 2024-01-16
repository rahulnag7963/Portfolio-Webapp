import {motion} from "framer-motion";
import { Card, Form, Container } from "react-bootstrap";
const Contact = () => {
  return (
    <div className="pt-4">
      <div className="display-3 text-center pb-4">
        Contact Me
      </div>
      <Container>
        <Card>
          <Form className="p-2">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="john doe" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                placeholder="A little bit about you and what you wish to talk about." 
                rows={3} 
              />
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </div>
  )
}

export default Contact