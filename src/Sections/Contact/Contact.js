import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Coffee from '../../Assets/coffee.png';


const ContactSection=(props)=>{
        return(
            <Container className='Contact text-center' id='contact'>
            <img src={Coffee} alt='Contact-me' className='img img-responsive'></img>
            <Card>
                <Card.Body>
                    <Row>
                        <Col sm={12} lg={4} className='mt-3 mb-2 '>
                            <h1>Start a Project</h1>
                        </Col>

                        <Col sm={12} lg={4} className='mt-3 mb-2 text-center'>
                            <p>
                            Interested in working together? We should queue up a chat. I’ll buy the coffee.
                            </p>
                        </Col>

                        <Col sm={12} lg={4} className='mt-3 mb-2 text-center'>
                            <Button onClick={props.showModal}>Let's do this</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            </Container>
        ) 
}


export default ContactSection;