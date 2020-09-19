import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Prism from 'prismjs';



const About=()=>{
    const code1=`
    class Baldeep_Singh {
        ··// I am a technology enthusiast who loves new challenges :)
        ··// I am always trying to expand the area of my skills
        ·· constructor() {
        ····this.name = 'Baldeep Singh'
        ····this.dateOfBirth = '03-24-1997'
        ····this.email = 'anshubaldeep@gmail com'
        ··}
        ·· workExperience() {
        ····return [
        ······{ '2020-now' : 'Full-stack Developer/Owner at Pixel Lab' }
        ······{ '2020-now' : 'Full-stack Developer at SARE S.A.' }
        ······{ '2017-2020': 'Front-end Developer at SARE S.A.' }
        ······{ '2015-2017': 'Full-Stack Designer at SARE S.A.' }
        ······{ '2013-2015': 'Graphic Designer at SARE S.A.' }
        ······{ '2006-now' : 'Full-Stack Designer/developer at yasio.pl' }
        ····]
        ··}
        ·· education() {
        ····return [
        ······{ '2017-2018': 'Google Developer Challenge Scholarship - Mobile Web Specialist' },
        ······{ '2012-2014': 'Wyższa Szkoła Biznesu w Dąbrowie Górniczej - mgr IT' },
        ······{ '2008-2012': 'Wyższa Szkoła Technologii Informatycznych w Katowicach - inż. IT' }
        ····]
        ··}
        ·· skills() {
        ····return [ 'HTML/CSS/JS', 'Vue', 'Node.js', 'jQuery', 'Bootstrap/Bulma/Material Design', 'Webpack/Gulp/Grunt', 'SASS/Less', 'npm/yarn/bower', 'Docker', 'PWA', 'SSR', 'SPA', 'GIT/CVS', 'Cordova', 'NativeScript', 'Electron', 'Web-extensions', 'Web Sockets', 'Firebase, 'RWD/W3C/ARIA/WCAG', 'XSLT', 'Smarty/Twig', 'PHP', 'MySQL/NoSQL', 'Wordpress', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere', 'Motion design', 'UX/UI', 'DTP', 'C#', 'Unity', 'TypeScript', 'NestJS'  ]
        ··}
        }`
        const code2=`
        class Baldeep_Singh {
            // I am a technology enthusiast who loves new challenges :)
            // I am always trying to expand the area of my skills
            constructor() {
              this.name = 'Baldeep Singh'
              this.dateOfBirth = '03-24-1997'
              this.email = 'anshubaldeep@gmail com'
            }
            workExperience() {
              return [
                { '2020-now' : 'Full-stack Developer/Owner at Pixel Lab' }
                { '2020-now' : 'Full-stack Developer at SARE S A ' }
                { '2017-2020': 'Front-end Developer at SARE S A ' }
                { '2015-2017': 'Full-Stack Designer at SARE S A ' }
                { '2013-2015': 'Graphic Designer at SARE S A ' }
                { '2006-now' : 'Full-Stack Designer/developer at yasio pl' }
              ]
            }
            education() {
              return [
                { '2017-2018': 'Google Developer Challenge Scholarship - Mobile Web Specialist' },
                { '2012-2014': 'Wyższa Szkoła Biznesu w Dąbrowie Górniczej - mgr IT' },
                { '2008-2012': 'Wyższa Szkoła Technologii Informatycznych w Katowicach - inż  IT' }
              ]
            }
            skills() {
              return [ 'HTML/CSS/JS', 'Vue', 'Node js', 'jQuery', 'Bootstrap/Bulma/Material Design', 'Webpack/Gulp/Grunt', 'SASS/Less', 'npm/yarn/bower', 'Docker', 'PWA', 'SSR', 'SPA', 'GIT/CVS', 'Cordova', 'NativeScript', 'Electron', 'Web-extensions', 'Web Sockets', 'Firebase, 'RWD/W3C/ARIA/WCAG', 'XSLT', 'Smarty/Twig', 'PHP', 'MySQL/NoSQL', 'Wordpress', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere', 'Motion design', 'UX/UI', 'DTP', 'C#', 'Unity', 'TypeScript', 'NestJS'  ]
            }
          }
            →            
        `
       
    let code=code1;
    const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

function useCurrentWidth() {
  let [width, setWidth] = useState(getWidth());

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

useEffect(()=>{
    Prism.highlightAll();
},[])

  return width;
}
 let width=useCurrentWidth();
 if(width<768){
     code=code2;
 }       

 

        return(
            <Container fluid className='About mt-5'>
                <Container className='line-numbers'>
                <p className='section-start mt-5'>About Me/&gt;</p>
                <pre className='language-javascript code-wrp line-numbers'>
                    <code className='language-javascript'>
                        {code}
                    </code>
                    <span class="react-rotating-text-cursor">|</span>
                </pre>
                </Container>
            </Container>
        );
}

export default About;