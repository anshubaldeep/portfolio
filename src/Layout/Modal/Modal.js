import React from 'react';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const contactModal=(props)=>{
        return(
            <Container className='justify-content-center'>      
            <Modal show={props.show} onHide={props.Close} className='custom-map-modal' variant="dark" centered>
            <Modal.Header closeButton>
              <Modal.Title >Contact Me</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className=''>
                    <Col>
                        <p>test</p>
                    </Col>
                </Row>
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