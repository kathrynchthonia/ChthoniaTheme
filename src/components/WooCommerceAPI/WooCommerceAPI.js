// woocommerceAPI.js
import axios from 'axios';

const fetchProducts = () => {
  return axios.get('http://your-wordpress-site.com/wp-json/wc/v3/products', {
    params: {
      consumer_key: 'your-consumer-key',
      consumer_secret: 'your-consumer-secret'
    }
  })
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
};

export default fetchProducts;