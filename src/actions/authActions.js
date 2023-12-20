// authActions.js
import axios from 'axios';

const WP_API_URL = process.env.REACT_APP_WP_API_URL;

export function signup(username, email, password) {
  return axios.post(`${WP_API_URL}/wp/v2/users/register`, {
    username,
    email,
    password
  })
    .then(response => {
      // The response includes the token
      const token = response.data.token;
      localStorage.setItem('token', token);
      return response;
    });
}

export function login(username, password) {
  return axios.post(`${WP_API_URL}/jwt-auth/v1/token`, {
    username,
    password
  })
    .then(response => {
      // The response includes the token
      const token = response.data.token;
      localStorage.setItem('token', token);
      return response;
    });
}

export function logout() {
  localStorage.removeItem('token');
}

export function isAuthenticated() {
  return !!localStorage.getItem('token');
}