import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './Layout/Layout';
import Jumbotron from '../src/Sections/Jumbotron/Jumbotron';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <div>
            <Jumbotron/>
          </div>
        </Layout>
      </header>
    </div>
  );
}

export default App;
