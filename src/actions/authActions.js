// authActions.js
import axios from 'axios';

const WP_API_URL = process.env.WP_API_URL;
const WP_URL = process.env.WP_URL;

export const login = (username, password) => dispatch => {
  return axios.post(`${WP_API_URL}/jwt-auth/v1/token`, {
    username,
    password
  })
    .then(response => {
      // The response includes the token
      const token = response.data.token;
      localStorage.setItem('token', token);
      dispatch(setCurrentUser(response.data.user));
    });
}

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch(setCurrentUser({}));
}

const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
});

export function isAuthenticated() {
  return !!localStorage.getItem('token');
}

export function resetPassword() {
  window.location.href = 'WP_URL/wp-login.php?action=lostpassword';
}