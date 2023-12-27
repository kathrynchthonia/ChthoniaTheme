// authActions.js
import axios from 'axios';

const WP_API_URL = process.env.WP_API_URL;

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
      dispatch({
        type: 'LOGIN_SUCCESS',
      });
    })
    .catch(error => {
      dispatch({
        type: 'LOGIN_ERROR',
        payload: error
      });
    });
}

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch(setCurrentUser({}));
  dispatch({
    type: 'LOGOUT_SUCCESS',
  });
}

const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
});