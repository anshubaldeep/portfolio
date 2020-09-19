import React from 'react';
import './App.scss';
import Layout from './Layout/Layout';
import Jumbotron from '../src/Sections/Jumbotron/Jumbotron';
import Aux from './hoc/hoc';
import WorkSection from './Sections/Work/Work';
import AboutSection from './Sections/About/About';

function App() {
  return (
    <Aux>
      <header className="App-header">
        <Layout>
          <Aux>
            <Jumbotron/>
            <WorkSection/> 
            <AboutSection/>
          </Aux>
        </Layout>
      </header>
    </Aux>
  );
}

export default App;
