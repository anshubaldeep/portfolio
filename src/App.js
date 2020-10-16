import React from 'react';
import './main.scss';
import Layout from './Layout/Layout';
import Jumbotron from '../src/Sections/Jumbotron/Jumbotron';
import Aux from './hoc/hoc';
import WorkSection from './Sections/Work/Work';
import MyJourneySection from './Sections/MyJourney/MyJourney';
import AboutSection from './Sections/About/About';
import ContactSection from './Sections/Contact/Contact';




function App() {
  return (
    <Aux>
        <Layout>
          <Aux>
          <header className="App-header">
            <Jumbotron />
            <AboutSection />
            <WorkSection /> 
            <MyJourneySection/>
            <ContactSection/>
          </header>
          </Aux>
        </Layout>
    </Aux>
  );
}

export default App;
