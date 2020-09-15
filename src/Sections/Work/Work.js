import React from 'react';
import Container from 'react-bootstrap/Container';
import img from '../../Assets/logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tilt from 'react-tilt';
import Aux from '../../hoc/Aux';

const projects=[
    {
        name:'Project 1',
        path:require('../../Assets/logo.png'),
        alt:'Project 1',
        description:'lorem ipsum',
    },

    {
        name:'Project 1',
        path:require('../../Assets/logo.png'),
        alt:'Project 1',
        description:'lorem ipsum',
    },

    {
        name:'Project 1',
        path:require('../../Assets/logo.png'),
        alt:'Project 1',
        description:'lorem ipsum',
    },

    {
        name:'Project 1',
        path:require('../../Assets/logo.png'),
        alt:'Project 1',
        description:'lorem ipsum',
    },

    {
        name:'Project 1',
        path:require('../../Assets/logo.png'),
        alt:'Project 1',
        description:'lorem ipsum',
    },

    {
        name:'Project 1',
        path:require('../../Assets/logo.png'),
        alt:'Project 1',
        description:'lorem ipsum',
    },
]


const WorkSection=()=>{
        const projectImages=projects.map(proj=>{
            return (
                
                <Col md={6} sm={12} className="d-flex justify-content-center mt-md-5 mt-2">
                    <Tilt className="Tilt" options={{ max : 25 , scale: 1.1}} style={{ height: 291, width: 300 }}>
                        <Card className="bg-transparent text-white text-center ml-md-0 ml-5">
                            <Card.Img src={proj.path} alt={proj.alt} />
                            <Card.ImgOverlay className="Tilt-inner text-left">
                                <Card.Title className='font-weight-bold' style={{position:"absolute",bottom:40 , left:-45}}>{proj.name}<hr/></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Tilt>
                </Col>
                
            )
        })
        return(
            <Container className='work'>
            <Row>
            <Col>
                <p className='section-start'>Work/&gt;</p>
                <h4>Some selected projects.....</h4>
                <br/> 
                <Row className='justify-content-center'>
                    {projectImages}
                </Row>
                
            </Col>
            </Row>
            <br/>
            </Container>
        );
}

export default WorkSection;