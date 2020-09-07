import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <div>
            <h1>lets get started</h1>
          </div>
        </Layout>
      </header>
    </div>
  );
}

export default App;
