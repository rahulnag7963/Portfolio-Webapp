import { useState, useRef } from "react";
import {motion} from "framer-motion";
import {Form, Container } from "react-bootstrap";
import emailjs from '@emailjs/browser';
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
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
                name="user_name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="name@example.com" 
                required
                name="user_email"
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
            <div className="d-grid gap-2">
              <motion.button
               className="btn btn-light btn-lg text-center"
               whileHover={{ 
                 scale: 1.1,
                 boxShadow: "0px 0px 8px rgba(255, 255, 255, 1)"
               }}
               type="submit"
               >
                  Send
               </motion.button>
            </div>
          </Form>
        
      </Container>
    </div>
  )
}

export default Contact