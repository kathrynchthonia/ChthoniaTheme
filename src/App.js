// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import AuthenticatedRoutes from './Routes/AuthenticatedRoutes';
import NonAuthenticatedRoutes from './Routes/NonAuthenticatedRoutes';

function App(props) {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem('token');
    setAuth(isAuthenticated);
  }, []);

  return (
    <div className="App">
      {auth ? <AuthenticatedRoutes /> : <NonAuthenticatedRoutes />}
    </div>
  );
}

export default App;