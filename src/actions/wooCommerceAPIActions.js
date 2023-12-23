// actions/wooCommerceAPIActions.js
import axios from 'axios';
import qs from 'qs';

const WC_API_URL = process.env.REACT_APP_WC_API_URL;
const CONSUMER_KEY = process.env.REACT_APP_WC_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.REACT_APP_WC_CONSUMER_SECRET;

export const fetchProducts = () => dispatch => {
  const queryParams = qs.stringify({
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET
  });

  axios.get(`${WC_API_URL}/products?${queryParams}`)
    .then(response => {
      dispatch({
        type: 'FETCH_PRODUCTS',
        payload: response.data
      });
    })
    .catch(error => {
      console.error(error);
    });
};

export const fetchProduct = id => dispatch => {
  const queryParams = qs.stringify({
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET
  });

  axios.get(`${WC_API_URL}/products/${id}?${queryParams}`)
    .then(response => {
      dispatch({
        type: 'FETCH_PRODUCT',
        payload: response.data
      });
    })
    .catch(error => {
      console.error(error);
    });
};