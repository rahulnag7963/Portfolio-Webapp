import { useState } from "react";
import {Button, Card, Form, Container } from "react-bootstrap";
const Contact = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  
  return (
    <div className="pt-4">
      <div className="display-3 text-center pb-4">
        Contact Me
      </div>
      <Container>
          <Form 
            className="p-2"
            noValidate 
            validated={validated} 
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="john doe" 
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="name@example.com" 
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                required 
              />
            </Form.Group>
            <Button className="text-center" type="submit">Send</Button>
          </Form>
        
      </Container>
    </div>
  )
}

export default Contact