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
                alt:'Warehouse Management App ',
                description:'This application is used to manage the data of a warehouse. Along with keeping track of various products present in the warehouse, it also provides the ability to add photos and description to the products by looking up for the project using their barcodes. Proper roles and authentication is provided to allow only Photographers to add photos and content writers to add content. Also the warehouse manager can populate the data for the warehouse using csvs for the bills.',
                modalShow:false,
                link:'http://warehousemanage.herokuapp.com/',
                techStack:['html','css','javaScript', 'Django', 'OCR-Scanning', 'SQL'],
                fpScreenshot:require('../../Assets/projects/fp_screenshots/warehouse-management.jpg')
            },
        
            {
                id:2,
                name:'Rescue Maps ',
                path:require('../../Assets/projects/thumbnails/Rescue-maps.jpg'),
                alt:'Rescue Maps ',
                description:'This project was made for the theme of disaster management. It provides live flood tracking using rain data and on the basis of this data categorizes areas as safe,moderate and dangerous. Also provides rescue organizations with an interface to setup a rescue camp and provide its various details like capacity, no of available beds along with their geographical location of the map in it. Also these organizations can have an idea of population in a particular location using heat maps to showcase the same. It also has an interface for the people who need to be rescued. They can look for the various camps and register their families by clicking on a camp and its capacity. Also they can provide feedback for their registered camps.',
                modalShow:false,
                link:'http://rescue-maps.herokuapp.com/',
                techStack:['html','css','javaScript','Django','D3'],
                fpScreenshot:require('../../Assets/projects/fp_screenshots/rescue-maps.jpg')
            },

            {
                id:3,
                name:'Lex Bolster ',
                path:require('../../Assets/projects/thumbnails/Lex-bolster.jpg'),
                alt:'Lex Bolster ',
                description:'A modern and refreshing cover page for a multi-functional firm which operates in law, educational trainings, among many other services. Developed using serverless backend services. Designed using modern aesthetic and minimalistic design principles.',
                modalShow:false,
                link:'http://lexbolster.com',
                techStack:['html','css','javaScript','Amazon-SES&Lambda'],
                fpScreenshot:require('../../Assets/projects/fp_screenshots/lex-bolster.png')
            },
        
            {
                id:4,
                name:'Examination Mangement System ',
                path:require('../../Assets/projects/thumbnails/Examination-management.png'),
                alt:'Examination Mangement System ',
                description:'Built as a complete system to store and transport the examination files with the maximum security. Workflow with Examination controller, teachers and publishers. 3 Teachers set the exam and these are stored in a distributed DMS called IPFS. Index keys for files then generated from here stored in private blockchain called Hyperledger, only viewable by Superintendent of examination 1 hour before examination as part of Smart Contract. One pf the keys then accessible sent to publisher 1 hour brfore exam and the exam file accessible on that day. Also AES encryption while sending files between the roles applied for extra security.',
                modalShow:false,
                link:'',
                techStack:['html','css','javaScript', 'Django','SQL','BlockChain','Hyperledger'],
                fpScreenshot:require('../../Assets/projects/fp_screenshots/Examination-management.jpg')
            },
        
            {
                id:5,
                name:'Burger Builder',
                path:require('../../Assets/projects/thumbnails/Burger-builder.jpg'),
                alt:'Burger Builder ',
                description:'A simple application with React using React hooks, CSS Modules and Google firebase for backend. It also has authentication provided by Google Firebase and tracks orders sent by the users.',
                modalShow:false,
                link:'',
                techStack:['html','css','javaScript','ReactJS','CSS-Modules','Google-Firebase','NoSQL'],
                fpScreenshot:require('../../Assets/projects/fp_screenshots/burger-builder.jpg')
            },
        
            // {
            //     id:6,
            //     name:'Project ',
            //     path:require('../../Assets/logo.png'),
            //     alt:'Project ',
            //     description:'lorem ipsum 66666',
            //     modalShow:false,
            //     link:'',
            //     techStack:['html','css','javaScript'],
            //     // fpScreenshot:require('../../Assets/projects/fp_screenshots')
            // },
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
                        <Card className="bg-transparent text-center ml-md-0 ml-5" onClick={()=>handleShow(index)}>
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
                                    <p className='mt-5'><span className='heading'>Description:</span><br/><p className='mt-2 content overflow-auto'>{proj.description}</p></p>
                                    <p className='mt-2 mb-1 d-sm-block d-md-none'>*Please scroll down to view Project Screenshots</p>
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