// Post.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WP_API_URL = process.env.WP_API_URL;

function Post({ match }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${WP_API_URL}/wp/v2/posts/${match.params.id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [match.params.id]);

  return post ? (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Post;