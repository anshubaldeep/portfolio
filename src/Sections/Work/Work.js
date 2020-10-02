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
                name:'Warehouse Management App ',
                path:require('../../Assets/projects/thumbnails/Warehouse-management.jpg'),
                alt:'Project ',
                description:'lorem ipsum 222222',
                modalShow:false,
                link:'',
                techStack:['html','css','javaScript'],
                fpScreenshot:require('../../Assets/projects/fp_screenshots/warehouse-management.jpg')
            },
        
            {
                id:2,
                name:'Rescue Maps ',
                path:require('../../Assets/projects/thumbnails/Rescue-maps.jpg'),
                alt:'Project ',
                description:'lorem ipsum 3333333',
                modalShow:false,
                link:'',
                techStack:['html','css','javaScript'],
                fpScreenshot:require('../../Assets/projects/fp_screenshots/rescue-maps.jpg')
            },

            {
                id:3,
                name:'Lex Bolster ',
                path:require('../../Assets/projects/thumbnails/Lex-bolster.jpg'),
                alt:'Project ',
                description:'lorem ipsum fbvdbdfdbd11111',
                modalShow:false,
                link:'https://anshubaldeep.github.io/Lex-Bolster/index.html',
                techStack:['html','css','javaScript'],
                fpScreenshot:require('../../Assets/projects/fp_screenshots/lex_bolster.png')
            },
        
            {
                id:4,
                name:'Examination Mangement System ',
                path:require('../../Assets/projects/thumbnails/Examination-management.png'),
                alt:'Project ',
                description:'lorem ipsum 44444',
                modalShow:false,
                link:'',
                techStack:['html','css','javaScript'],
                fpScreenshot:require('../../Assets/projects/fp_screenshots/Examination-management.jpg')
            },
        
            {
                id:5,
                name:'Project ',
                path:require('../../Assets/logo.png'),
                alt:'Project ',
                description:'lorem ipsum 55555',
                modalShow:false,
                link:'',
                techStack:['html','css','javaScript'],
                // fpScreenshot:require('../../Assets/projects/fp_screenshots')
            },
        
            {
                id:6,
                name:'Project ',
                path:require('../../Assets/logo.png'),
                alt:'Project ',
                description:'lorem ipsum 66666',
                modalShow:false,
                link:'',
                techStack:['html','css','javaScript'],
                // fpScreenshot:require('../../Assets/projects/fp_screenshots')
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
                    <Tilt className="Tilt" options={{ max : 25 , scale: 1.1}} style={{ height: 441, width: 450 }}>
                        <Card className="bg-transparent text-white text-center ml-md-0 ml-5" onClick={()=>handleShow(index)}>
                            <Card.Img src={proj.path} alt={proj.alt} />
                            <Card.ImgOverlay className="text-left">
                                <Card.Title className='tilt-inner font-weight-bold text-left' style={{position:"absolute",bottom:40 , left:-45,width:'260px'}}>{proj.name}<hr/><p className='mt-4' style={{fontSize:'0.5em'}}>→ 0{proj.id}</p></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Tilt>

                    <Modal key ={index} show={projects[index].modalShow} onHide={()=>handleClose(index)} className='custom-map-modal' variant="dark" centered>
                        <Modal.Header closeButton>
                          <Modal.Title >{proj.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row className='overflow-auto'>
                                <Col md={{span:9, order:'first' }} xs={{ span: 12, order: 'last' }} className='modal-image'>
                                    <div className='fullpage'>
                                        <img className='img img-responsive w-100' src={proj.fpScreenshot} alt={proj.alt}></img>
                                    </div>
                                </Col>
                                <Col xs={12} md={3} className='overflow-auto project-content'>
                                    <p><span className='heading'>Technology Stack:</span><br/> <span className='content'>{proj.techStack.map(i=>('#'+i+' '))}</span></p>
                                    <p className='mt-5'><span className='heading'>Description:</span><br/><span className='content'>{proj.description}</span></p>
                                    <br/>
                                    
                                        {proj.link.length > 0 &&
                                                <Button variant='primary' href={proj.link} target='_blank'>VISIT</Button>   
                                        }
                                    
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={()=>handleClose(index)}>
                            Close
                          </Button>
                        </Modal.Footer>
                    </Modal>

                </Col>
                
            )
        })
        return(
            <Container className='work mt-5' id='work'>
            <Row>
            <Col>
                <p className='section-start'>Work/&gt;</p>
                <h4>Some selected projects.....</h4>
                <br/> 
                <div id='web' className='mb-3 d-none d-sm-none d-md-block img-responsive'></div>
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