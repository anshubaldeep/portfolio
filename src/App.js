import React from 'react';
import './main.scss';
import Layout from './Layout/Layout';
import Jumbotron from '../src/Sections/Jumbotron/Jumbotron';
import Aux from './hoc/hoc';
import WorkSection from './Sections/Work/Work';
import MyJourneySection from './Sections/MyJourney/MyJourney';
import AboutSection from './Sections/About/About';
import ThemeChanger from './Themes/ThemeChanger';



function App() {
  return (
    <Aux>
        <Layout>
          <Aux>
          <header className="App-header">
            <Jumbotron />
            <ThemeChanger/>
            <AboutSection />
            <WorkSection /> 
            <MyJourneySection/>
          </header>
          </Aux>
        </Layout>
    </Aux>
  );
}

export default App;
