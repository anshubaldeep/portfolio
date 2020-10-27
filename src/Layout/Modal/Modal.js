import React, { useState } from 'react';
import  Container  from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';


const ContactModal=(props)=>{
        const [name,setName]= useState(null);
        const [email,setEmail]= useState(null);
        const [queryType,setQueryType]= useState(null);
        

        return(
            <Container className='justify-content-center'>      
            <Modal show={props.show} onHide={props.Close} className='custom-map-modal contact-modal' variant="dark" centered>
            <Modal.Header closeButton>
              <Modal.Title >Contact Me <FontAwesomeIcon icon={faPaperPlane} size="md"/></Modal.Title>
            </Modal.Header>
            <Modal.Body className="justify-content-center">
            <Form action="https://api.staticforms.xyz/submit" method="post">
            <Form.Row>
                <Form.Group as={Col} md="6" sm="12" controlId="validationCustom01">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      placeholder="Your name"
                      onChange={event=>setName(event.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" sm="12" controlId="validationCustom01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      name="email"
                      placeholder="Your email"
                      onChange={event=>setEmail(event.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} sm="12" controlId="formGridState">
                <Form.Label>Type of Project</Form.Label>
                <div className='custom-select'>
                    <Form.Control as="select" placeholder="Choose..." type="text" name="$QueryType" onChange={event=>setQueryType(event.target.value)}>
                          <option></option>
                          <option>Front-End</option>
                          <option>Back-End</option>
                          <option>Mobile App</option>
                          <option>Responsive Design</option>
                          <option>Prototyping</option>
                    </Form.Control>
                    </div>
                </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} sm="12" controlId="formGridState">
                <Form.Label>Additional Details</Form.Label>
                    <Form.Control as="textarea" name="message">
                    </Form.Control>
                </Form.Group>
              </Form.Row>
              <Button type="submit" value="Submit" size="lg" block className='submit-btn'>Submit form</Button>
              <Form.Control type="text" name="honeypot" style={{display:'none'}} />
              <Form.Control type="hidden" name="accessKey" value="af947b53-2b26-41c9-9cb1-fc5d9004ef41"/>
              <Form.Control type="hidden" name="subject" value={`${queryType} Query from portfolio by ${name} - ${email}`}/>
              <Form.Control type="hidden" name="redirectTo" value="http://localhost:3000/Success"/>
            </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.Close}>
                Close
              </Button>
            </Modal.Footer>
        </Modal>
        </Container>
        );
}

export default ContactModal;