// NonAuthenticatedRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<Product />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default NonAuthenticatedRoutes;