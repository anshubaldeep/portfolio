import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithubAlt,
    faGoogle,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';

const Footer=()=>{
        return(
            <Container>
                <p className='section-start mt-5'>Contact/&gt;</p>
                <br/>
                <p>Find me on:</p>
                <Row className='text-center'>
                    <Col md={3} xs={12}><a href='#'><FontAwesomeIcon icon={faGithubAlt}/> cOFFEE</a></Col>
                    <Col md={3} xs={12}><a href='#'><FontAwesomeIcon icon={faGoogle}/> cOFFEE</a></Col>
                    <Col md={3} xs={12}><a href='#'><FontAwesomeIcon icon={faTwitter}/> cOFFEE</a></Col>
                </Row>
            </Container>
        );
}

export default Footer;