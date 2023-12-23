// NonAuthenticatedRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Privacy from '../components/Privacy';
import Terms from '../components/Terms';
import Store from '../components/Store';
import Product from '../components/Product';
import Post from '../components/Post';

function NonAuthenticatedRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route exact path="/store" component={Store} />
        <Route path="/store/:id" component={Product} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </Router>
  );
}

export default NonAuthenticatedRoutes;