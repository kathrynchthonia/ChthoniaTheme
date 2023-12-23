// Product.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/wooCommerceAPIActions';

class Product extends Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  render() {
    const { product } = this.props;

    if (!product) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <img src={product.images[0].src} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products.product
});

export default connect(mapStateToProps, { fetchProduct })(Product);