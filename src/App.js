import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home'
import { HowToProtectYourself } from './HowToProtectYourself'
import { Symptoms } from './Symptoms'
import { NoMatch } from './NoMatch'
import {Layout } from './components/Layout';
import { Navigation } from './components/Navigation'

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Symptoms" component={Symptoms} />
          <Route path="/HowToProtectYourself" component={HowToProtectYourself} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
