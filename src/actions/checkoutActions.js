// CheckoutActions.js
import axios from 'axios';

export const createOrder = (order) => dispatch => {
  return axios.post('/wc/v3/orders', order)
    .then(response => {
      dispatch({
        type: 'CREATE_ORDER_SUCCESS',
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: 'CREATE_ORDER_ERROR',
        payload: error
      });
    });
};