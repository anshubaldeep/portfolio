import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


 const sections=[
  
  {
    name:'Design and Prototyping',
    description:'Improve & add more value to products through simple and interactive design',
    line:'Things I enjoy designing',
    objects:'UX, UI, Web, Mobile, Apps',
    tools:['Adobe XD','Figma','Pen & Paper','Adobe PhotoShop'],
    image:require('../../Assets/section1-dark.png'),
    pos:'start'
  },  
  
  {
      name:'Front-End',
      description:'Code and develop solutions from scratch which are simple and effective',
      line:'Things I develop',
      objects:'Websites, Web Apps, Mobile apps',
      tools:['HTML','CSS','JavaScript','React','SASS/LESS','Bootstrap'],
      image:require('../../Assets/section2-dark.png'),
      pos:'middle'
    },

    {
      name:'Back-End',
      description:'Bringing to life the logic brhind applications with the use of mangeable and potent technologies',
      line:'Ask me to program',
      objects:'Applications and Webservices',
      tools:['NodeJS','MySQL','Python','Django','Blockchain'],
      image:require('../../Assets/section3-dark.png'),
      pos:'last'
    },
    
]

const AboutSection=()=>{
  const sectionData=sections.map((sec,index)=>{
    return(
      <Col md={4} xs={12} className='text-center section-card' key={index}>
        <Card className={`w-100 ${sec.pos}`}>
        <Card.Body>
        <img src={sec.image} alt='section-img' className={`section-img image-${index+1}`}/>
        <Card.Title>{sec.name}{index>0?' Developer':''}</Card.Title>
        <Card.Subtitle className="mb-2">{sec.description}</Card.Subtitle>
        <Card.Text>
        <div className='objects-section'>
          <p className='section-line mt-1'>{sec.line}:</p>
          <p>{sec.objects}</p>
        </div>
        <div className='tools-section'>
          <p className='section-line mt-1'>{sec.name} tools:</p>
          <ul className="list-unstyled">
            {sec.tools.map((tool,index)=>(<li key={index}>{tool}</li>))}
          </ul>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
    )
  })      
  return(
          <Container className='About'  id='about'>
            <Row className='text-left about-text'>
            
              <Col>
              <p className='section-start mt-5'>About Me/&gt;</p><br/>
                <h1>Hello! I'm Baldeep. Nice to meet you.</h1>
                <p>I am a budding software developer who loves to create and is not afraid to take up new challenges. I like to develop websites, web-apps and mobile apps.
                    I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                </p>
              </Col>
            </Row>
            <Row>
              {sectionData}
            </Row>
          </Container>
        );
}

export default AboutSection;