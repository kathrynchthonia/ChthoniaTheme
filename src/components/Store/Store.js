// Store.js
import React, { useState, useEffect } from 'react';
import fetchProducts from './WooCommerceAPI/WooCommerceAPI';
import Paginate from 'react-paginate';

function Store() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('none');
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 10;

  useEffect(() => {
    fetchProducts().then(fetchedProducts => {
      setProducts(fetchedProducts);
    });
  }, []);

  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

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
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products" />
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="none">Sort by price</option>
        <option value="asc">Low to high</option>
        <option value="desc">High to low</option>
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
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default Store;