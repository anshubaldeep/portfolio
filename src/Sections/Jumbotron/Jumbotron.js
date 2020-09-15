import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from '../../Assets/Avatar.png';
import ReactRotatingText from 'react-rotating-text';



const JumbotronComponent=()=>{
        const develop=['websites','webapps','mobile-apps','ux/ui'];
        
        return(
            <Jumbotron fluid className="w-100 section align-items-center">
                <Container>
                    <Row>
                        <Col lg={9}  md={7} xs={12} className=''>
                            <p className='section-start'>Start/&gt;</p>
                            <h1>Hi, my name is <span className='name font-weight-bold'>Baldeep Singh</span></h1>
                            <h1>i <span className='font-italic'>design</span> and <span className='text-monospace'>develop</span><br/> <ReactRotatingText items={develop} /></h1>
                            <h4 className="mt-md-3">Let me show You....</h4>
                        </Col>
                        <Col lg={3} md={5} xs={12}>
                            <div className='text-center'>
                                <img src={Avatar} alt='My_Avatar' className='img img-responsive'/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
}

export default JumbotronComponent;