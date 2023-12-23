// Home.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/wordpressAPIActions';
import { fetchProducts } from '../../actions/wooCommerceAPIActions';

function Home({ fetchPosts, fetchProducts, posts, products }) {
  useEffect(() => {
    fetchPosts();
    fetchProducts();
  }, [fetchPosts, fetchProducts]);

  return (
    <div className="container mx-auto px-4">
      <div className="hero-banner bg-blue-500 text-white text-center py-12 mb-12">
        <h1 className="text-4xl mb-4">Welcome to our homepage!</h1>
        <p className="text-xl">Check out our latest posts and products below.</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="product-card rounded overflow-hidden shadow-lg">
            <img className="w-full" src={product.images[0].src} alt={product.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  products: state.products.products
});

export default connect(mapStateToProps, { fetchPosts, fetchProducts })(Home);