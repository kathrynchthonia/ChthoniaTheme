// Blog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paginate from 'react-paginate';
import { Link } from 'react-router-dom';

const WP_API_URL = process.env.WP_API_URL;

function Blog() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('none');
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 10;

  useEffect(() => {
    axios.get(`${WP_API_URL}/wp/v2/posts`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  const filteredAndSortedPosts = posts
    .filter(post => post.title.rendered.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'asc') {
        return Date.parse(a.date) - Date.parse(b.date);
      } else if (sort === 'desc') {
        return Date.parse(b.date) - Date.parse(a.date);
      } else {
        return 0;
      }
    });

  const displayedPosts = filteredAndSortedPosts
    .slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage)
    .map(post => (
      <div key={post.id}>
        <Link to={`/post/${post.id}`}>{post.title.rendered}</Link>
        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      </div>
    ));

  return (
    <div>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search posts" />
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="none">Sort by date</option>
        <option value="asc">Oldest first</option>
        <option value="desc">Newest first</option>
      </select>
      {displayedPosts}
      <Paginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(filteredAndSortedPosts.length / postsPerPage)}
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

export default Blog;