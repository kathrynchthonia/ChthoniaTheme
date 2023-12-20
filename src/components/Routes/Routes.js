// routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;