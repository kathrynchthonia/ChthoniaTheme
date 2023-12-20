// wordpressAPI.js
import axios from 'axios';

const fetchPosts = () => {
  return axios.get('http://your-wordpress-site.com/wp-json/wp/v2/posts')
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
};

export default fetchPosts;