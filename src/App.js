import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home'
import { HowToProtectYourself } from './HowToProtectYourself'
import { NoMatch } from './NoMatch'
import {Layout } from './components/Layout';
import { Navigation } from './components/Navigation'
import { Jumbotron } from './components/Jumbotron'
import Dropdown from './components/dropdown'

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Jumbotron />
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/HowToProtectYourself" component={HowToProtectYourself} />
          <Route path="/Statistics" component={Dropdown} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
