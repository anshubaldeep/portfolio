import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Tilt from 'react-tilt';



const WorkSection=()=>{
        const [projects,setProject]=useState([
            {
                id:1,
                name:'Project ',
                path:require('../../Assets/logo.png'),
                alt:'Project ',
                description:'lorem ipsum fbvdbdfdbd11111',
                modalShow:false
            },
        
            {
                id:2,
                name:'Project ',
                path:require('../../Assets/logo.png'),
                alt:'Project ',
                description:'lorem ipsum 222222',
                modalShow:false
            },
        
            {
                id:3,
                name:'Project ',
                path:require('../../Assets/logo.png'),
                alt:'Project ',
                description:'lorem ipsum 3333333',
                modalShow:false
            },
        
            {
                id:4,
                name:'Project ',
                path:require('../../Assets/logo.png'),
                alt:'Project ',
                description:'lorem ipsum 44444',
                modalShow:false
            },
        
            {
                id:5,
                name:'Project ',
                path:require('../../Assets/logo.png'),
                alt:'Project ',
                description:'lorem ipsum 55555',
                modalShow:false
            },
        
            {
                id:6,
                name:'Project ',
                path:require('../../Assets/logo.png'),
                alt:'Project ',
                description:'lorem ipsum 66666',
                modalShow:false
            },
        ]);

        const handleClose =(id)=>{
            const newProjects=[...projects];
            newProjects[id].modalShow=false;
            setProject(newProjects);
        }

        const handleShow =(id)=>{
            const newProjects=[...projects];
            newProjects[id].modalShow=true;
            setProject(newProjects);
        }

        const projectImages=projects.map((proj,index)=>{
            return (
                
                <Col md={6} sm={12} className="d-flex justify-content-center mt-md-5 mt-2" key={index}>
                    <Tilt className="Tilt" options={{ max : 25 , scale: 1.1}} style={{ height: 291, width: 300 }}>
                        <Card className="bg-transparent text-white text-center ml-md-0 ml-5" onClick={()=>handleShow(index)}>
                            <Card.Img src={proj.path} alt={proj.alt} />
                            <Card.ImgOverlay className="text-left">
                                <Card.Title className='tilt-inner font-weight-bold' style={{position:"absolute",bottom:40 , left:-45}}>{proj.name} {proj.id}<hr/></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Tilt>

                    <Modal key ={index} show={projects[index].modalShow} onHide={()=>handleClose(index)} className='custom-map-modal' centered>
                        <Modal.Header closeButton>
                          <Modal.Title>{proj.name} {proj.id}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{proj.description}</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={()=>handleClose(index)}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={()=>handleClose(index)}>
                            Save Changes
                          </Button>
                        </Modal.Footer>
                    </Modal>

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