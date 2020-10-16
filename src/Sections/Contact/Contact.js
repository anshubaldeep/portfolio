import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Coffee from '../../Assets/coffee.png';


const ContactSection=()=>{
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
                            <Button>Let's do this</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            </Container>

        // <Modal key ={index} show={projects[index].modalShow} onHide={()=>handleClose(index)} className='custom-map-modal' variant="dark" centered>
        //                         <Modal.Header closeButton>
        //                           <Modal.Title >{proj.name}</Modal.Title>
        //                         </Modal.Header>
        //                         <Modal.Body>
        //                             <Row className='overflow-auto'>
        //                                 <Col md={{span:9, order:'first' }} xs={{ span: 12, order: 'last' }} className='modal-image'>
        //                                     <div className='fullpage'>
        //                                         <img className='img img-responsive w-100' src={proj.fpScreenshot} alt={proj.alt}></img>
        //                                     </div>
        //                                 </Col>
        //                                 <Col xs={12} md={3} className='overflow-auto project-content'>
        //                                     <p><span className='heading'>Technology Stack:</span><br/> <span className='content'>{proj.techStack.map(i=>('#'+i+' '))}</span></p>
        //                                     <p className='mt-5'><span className='heading'>Description:</span><br/><span className='content'>{proj.description}</span></p>
        //                                     <br/>
                                            
        //                                         {proj.link.length > 0 &&
        //                                                 <Button variant='primary' href={proj.link} target='_blank'>VISIT</Button>   
        //                                         }
                                            
        //                                 </Col>
        //                             </Row>
        //                         </Modal.Body>
        //                         <Modal.Footer>
        //                           <Button variant="secondary" onClick={()=>handleClose(index)}>
        //                             Close
        //                           </Button>
        //                         </Modal.Footer>
        //                     </Modal>
        );
}

export default ContactSection;