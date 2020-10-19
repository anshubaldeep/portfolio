import React from 'react';
import  Container  from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const contactModal=(props)=>{
        return(
            <Container className='justify-content-center'>      
            <Modal show={props.show} onHide={props.Close} className='custom-map-modal contact-modal' variant="dark" centered>
            <Modal.Header closeButton>
              <Modal.Title >Contact Me</Modal.Title>
            </Modal.Header>
            <Modal.Body className="justify-content-center">
            <Form>
            <Form.Row>
                <Form.Group as={Col} md="6" sm="12" controlId="validationCustom01">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Your name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" sm="12" controlId="validationCustom01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Your email"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} sm="12" controlId="formGridState">
                <Form.Label>Type of Project</Form.Label>
                    <Form.Control as="select" placeholder="Choose...">
                          <option></option>
                          <option>Front-End</option>
                          <option>Back-End</option>
                          <option>Responsive Design</option>
                          <option>Mobile App</option>
                          <option>Prototyping</option>
                    </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} sm="12" controlId="formGridState">
                <Form.Label>Additional Details</Form.Label>
                    <Form.Control as="textarea" >
                    </Form.Control>
                </Form.Group>
              </Form.Row>
              <Button type="submit" size="lg" block className='text-center'>Submit form</Button>
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

export default contactModal;