// Login.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login, resetPassword } from '../actions/authActions';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Log In</button>
      <p>
        <a href="#" onClick={resetPassword}>Reset Password</a>
      </p>
    </form>
  );
}

export default connect(null, { login })(Login);