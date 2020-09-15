import React from 'react';
import './App.scss';
import Layout from './Layout/Layout';
import Jumbotron from '../src/Sections/Jumbotron/Jumbotron';
import Aux from './hoc/hoc';
import WorkSection from './Sections/Work/Work';

function App() {
  return (
    <Aux>
      <header className="App-header">
        <Layout>
          <Aux>
            <Jumbotron/>
            <WorkSection/> 
          </Aux>
        </Layout>
      </header>
    </Aux>
  );
}

export default App;
