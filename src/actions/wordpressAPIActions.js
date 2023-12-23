// actions/wordpressAPIActions.js
import axios from 'axios';
const WP_API_URL = process.env.WP_API_URL;

export const fetchPosts = () => dispatch => {
  axios.get(`${WP_API_URL}/posts`)
    .then(response => {
      dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
      });
    })
    .catch(error => {
      console.error(error);
    });
};

export const fetchPost = id => dispatch => {
  axios.get(`${WP_API_URL}/posts/${id}`)
    .then(response => {
      dispatch({
        type: 'FETCH_POST',
        payload: response.data
      });
    })
    .catch(error => {
      console.error(error);
    });
};

export const fetchPage = id => dispatch => {
  axios.get(`${WP_API_URL}/pages/${id}`)
    .then(response => {
      dispatch({
        type: 'FETCH_PAGE',
        payload: response.data
      });
    })
    .catch(error => {
      console.error(error);
    });
};