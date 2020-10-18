import React,{useState} from 'react';
import './main.scss';
import Layout from './Layout/Layout';
import Jumbotron from '../src/Sections/Jumbotron/Jumbotron';
import Aux from './hoc/hoc';
import WorkSection from './Sections/Work/Work';
import MyJourneySection from './Sections/MyJourney/MyJourney';
import AboutSection from './Sections/About/About';
import ContactSection from './Sections/Contact/Contact';
import ContactModal from './Layout/Modal/Modal'



function App() {
  const [show,setShow]=useState(false);
    const handleClose=()=>{
        setShow(false);
    }
    const openModal=()=>{
        setShow(true);
    }
  return (
    <Aux>
        <Layout>
          <Aux>
          <header className="App-header">
            <Jumbotron showModal={openModal}/>
            <AboutSection />
            <WorkSection /> 
            <MyJourneySection/>
            <ContactSection showModal={openModal}/>
            <ContactModal show={show} Close={handleClose}/>
          </header>
          </Aux>
        </Layout>
    </Aux>
  );
}

export default App;
