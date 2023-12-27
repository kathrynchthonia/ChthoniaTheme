// actions/wordpressAPIActions.js
import axios from 'axios';
const WP_API_URL = process.env.WP_API_URL;

export const fetchPosts = () => dispatch => {
  axios.get(`${WP_API_URL}/posts`)
    .then(response => {
      dispatch({
        type: 'FETCH_POSTS_SUCCESS',
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: 'FETCH_POSTS_ERROR',
        payload: error
      });
    });
};

export const fetchPost = id => dispatch => {
  axios.get(`${WP_API_URL}/posts/${id}`)
    .then(response => {
      dispatch({
        type: 'FETCH_POST_SUCCESS',
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: 'FETCH_POST_ERROR',
        payload: error
      });
    });
};

export const fetchPage = id => dispatch => {
  axios.get(`${WP_API_URL}/pages/${id}`)
    .then(response => {
      dispatch({
        type: 'FETCH_PAGE_SUCCESS',
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: 'FETCH_PAGE_ERROR',
        payload: error
      });
    });
};