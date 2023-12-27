// AuthenticatedRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Privacy from '../components/Privacy';
import Terms from '../components/Terms';
import Store from '../components/Store';
import Product from '../components/Product';
import Post from '../components/Post';
// import Dashboard from '../components/Dashboard';
// import Profile from '../components/Profile';


function AuthenticatedRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<Product />} />
        <Route path="/post/:id" element={<Post />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  );
}

export default AuthenticatedRoutes;