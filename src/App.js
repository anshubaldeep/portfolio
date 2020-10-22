import React from 'react';
import './main.scss';
import Layout from './Layout/Layout';
import Aux from './hoc/hoc';
import SuccessPage from './Sections/Success/Success';
import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import AppHeader from './AppHeader';


function App() {
  
  return (
    <Aux>
        <Layout>
          <Aux>
          <Router>
          <Switch>
          <Route path="/Success" component={SuccessPage}/>
          <Route path="/" component={AppHeader}/>
          </Switch>
          </Router>
          </Aux>
        </Layout>
    </Aux>
  );
}

export default App;
