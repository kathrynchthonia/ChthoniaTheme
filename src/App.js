// App.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isAuthenticated } from './actions/authActions';
import './App.css';
import AuthenticatedRoutes from './components/Routes/AuthenticatedRoutes';
import NonAuthenticatedRoutes from './components/Routes/NonAuthenticatedRoutes';

function App(props) {
  const { isAuthenticated, auth } = props;

  useEffect(() => {
    isAuthenticated();
  }, [isAuthenticated]);

  return (
    <div className="App">
      {auth ? <AuthenticatedRoutes /> : <NonAuthenticatedRoutes />}
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { isAuthenticated })(App);