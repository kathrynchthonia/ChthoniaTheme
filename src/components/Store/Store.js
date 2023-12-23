// Store.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/woocommerceAPIActions';
import Paginate from 'react-paginate';

class Store extends Component {
  state = {
    search: '',
    sort: 'none',
    currentPage: 0,
    productsPerPage: 10
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  handlePageClick = (selectedItem) => {
    this.setState({ currentPage: selectedItem.selected });
  };

  render() {
    const { search, sort, currentPage, productsPerPage } = this.state;
    const { products } = this.props;

    const filteredAndSortedProducts = products
      .filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        if (sort === 'asc') {
          return parseFloat(a.price) - parseFloat(b.price);
        } else if (sort === 'desc') {
          return parseFloat(b.price) - parseFloat(a.price);
        } else {
          return 0;
        }
      });

    const displayedProducts = filteredAndSortedProducts
      .slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage)
      .map(product => (
        <div key={product.id}>
          <img src={product.images[0].src} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ));

    return (
      <div>
        <input type="text" value={search} onChange={e => this.setState({ search: e.target.value })} placeholder="Search" />
        <select value={sort} onChange={e => this.setState({ sort: e.target.value })}>
          <option value="none">None</option>
          <option value="asc">Lowest to Highest Price</option>
          <option value="desc">Highest to Lowest Price</option>
        </select>
        {displayedProducts}
        <Paginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(filteredAndSortedProducts.length / productsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps, { fetchProducts })(Store);