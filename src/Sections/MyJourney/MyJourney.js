import React from 'react';
import Container from 'react-bootstrap/Container';
import MyJourneyCode from './MyJourneyCode';



const MyJourney=()=>{
    
        
    //     const code2=`
    //     class Baldeep_Singh {
    //         // I am a technology enthusiast who loves new challenges :)
    //         // I am always trying to expand the area of my skills
    //         constructor() {
    //           this.name = 'Baldeep Singh'
    //           this.dateOfBirth = '03-24-1997'
    //           this.email = 'anshubaldeep@gmail com'
    //         }
    //         workExperience() {
    //           return [
    //             { '2020-now' : 'Software Engineer at Newgen Software' }
    //             { '2019': 'Web Developer, Intern at Lex Bolster ' }
    //             { '2018-2019': 'Junior Application Consultant at SIE Services ' }
    //             { '2019': 'Front End Developer, Intern at Aeris Technologies ' }
    //             { '2018' : 'Blockchain Developer, Intern at DXC Technologies ' }
    //           ]
    //         }
    //         education() {
    //           return [
    //             { '2016-2020': 'B.E. in Information Technology' },
    //             { '2014-2015': 'HSC from Sneh International School' },
    //           ]
    //         }
    //         skills() {
    //           return [ 'HTML/CSS/JS', 'ReactJS', 'NodeJS', 'jQuery', 'Bootstrap/Material Design', 'Webpack/Gulp', 'SASS/Less', 'npm/yarn',  'GIT', 'Firebase,  'MySQL/NoSQL',  'Photoshop',  'UX/UI',  'C++', 'Python', 'Blockchain', 'NextJS'  `
       
    // let code=code2;
    

  



 



        return(
            <Container fluid className='MyJourney'>
                <Container className='line-numbers ' id='myjourney'>
                <p className='section-start mt-5'>MyJourney/&gt;</p>
                <MyJourneyCode/>
                </Container>
            </Container>
        );
}

export default MyJourney;