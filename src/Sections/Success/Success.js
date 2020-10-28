import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import SuccessImg from '../../Assets/success.png';
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';

const SuccessPage=()=>{
        const history=useHistory();
        const redirectToMainPage=()=>{
            history.push("/");
        }
        console.log(history);
        return(
            <Jumbotron className='Success'>
            <Container className='text-center'>
                <Row>
                    <Col md={6} sm={12}>
                        <p>Thank You for your interest!</p>
                        <p>I have recieved your query.</p>
                        <p>I'll follow up with you soon!</p>
                        <Button className='btn-primary' onClick={redirectToMainPage}>Back to main page  <FontAwesomeIcon icon={faExternalLinkAlt}/></Button>
                    </Col>
                    <Col md={6} sm={12}>
                        <img src={SuccessImg} alt='Success'></img>
                    </Col>
                </Row>
            </Container>
            </Jumbotron>
        );
}

export default SuccessPage;