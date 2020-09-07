import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from '../../Assets/Avatar.png';
import './Jumbotron.css'


const JumbotronComponent=()=>{
        const develop=['websites','webapps','mobile-apps','ux/ui'];
        
        return(
            <Jumbotron>
                <Container>
                    <Row>
                        <Col lg={9}  md={7} xs={12} className='mt-lg-5 mt-5'>
                            <p>Start/&gt;</p>
                            <h1>Hi, my name is <span className='name font-weight-bold'>Baldeep Singh</span></h1>
                            <h1>i <span className='font-italic'>design</span> and <span className='text-monospace'>develop</span> </h1>
                            <h4>Let me show You....</h4>
                        </Col>
                        <Col lg={3} md={5} xs={12}>
                            <div className='text-center mt-lg-5 mt-3'>
                                <img src={Avatar} alt='My_Avatar' className='img img-responsive'/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
}

export default JumbotronComponent;