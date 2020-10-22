import React,{useState} from 'react';
import Jumbotron from '../src/Sections/Jumbotron/Jumbotron';
import WorkSection from './Sections/Work/Work';
import MyJourneySection from './Sections/MyJourney/MyJourney';
import AboutSection from './Sections/About/About';
import ContactSection from './Sections/Contact/Contact';
import ContactModal from './Layout/Modal/Modal';



const AppHeader=()=>{
    const [show,setShow]=useState(false);
    const handleClose=()=>{
        setShow(false);
    }
    const openModal=()=>{
        setShow(true);
    }
        return(
            <header className="App-header">
            <Jumbotron showModal={openModal}/>
            <AboutSection />
            <WorkSection /> 
            <MyJourneySection/>
            <ContactSection showModal={openModal}/>
            <ContactModal show={show} Close={handleClose}/>
          </header>
        );
}

export default AppHeader;