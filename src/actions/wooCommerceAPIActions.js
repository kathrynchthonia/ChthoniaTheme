// woocommerceAPI.js
import axios from 'axios';

const CONSUMER_KEY = process.env.CONSUMER_KEY;
const CONSUMER_SECRET = process.env.CONSUMER_SECRET;

const fetchProducts = () => {
  return axios.get('http://your-wordpress-site.com/wp-json/wc/v3/products', {
    params: {
      consumer_key: CONSUMER_KEY,
      consumer_secret: CONSUMER_SECRET
    }
  })
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
};

export default fetchProducts;