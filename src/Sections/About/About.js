import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


// const sections={

// }

const AboutSection=()=>{
  // const sectionData=sections.map((sec,index)=>{
  //   return(
  //     <Col md={4} xs={12}>

  //     </Col>
  //   )
  // })      
  return(
          <Container className='About'>
            <p className='section-start mt-5'>About Me/&gt;</p><br/>
            <Row className='text-center about-text'>
              <Col>
                <h1>Hello! I'm Baldeep. Nice to meet you.</h1>
                <p>I am a budding software developer who love to create and is not afraid to take up new challenges. I like to develop websites, web-apps and mobile apps.
                    I have been part of multiple projects and am always intreseted to induldge in new ideas and emerging technologies like Blockchain, AI, etc. 
                    I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                </p>
              </Col>
            </Row>
          </Container>
        );
}

export default AboutSection;