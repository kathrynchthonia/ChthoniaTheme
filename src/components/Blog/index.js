// Blog.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/wordpressAPIActions';
import Paginate from 'react-paginate';
import { Link } from 'react-router-dom';

class Blog extends Component {
  state = {
    search: '',
    sort: 'none',
    currentPage: 0,
    postsPerPage: 10
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  handlePageClick = (selectedItem) => {
    this.setState({ currentPage: selectedItem.selected });
  };

  render() {
    const { search, sort, currentPage, postsPerPage } = this.state;
    const { posts } = this.props;

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
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
      ));

    return (
      <div>
        <input type="text" value={search} onChange={e => this.setState({ search: e.target.value })} placeholder="Search" />
        <select value={sort} onChange={e => this.setState({ sort: e.target.value })}>
          <option value="none">None</option>
          <option value="asc">Oldest to Newest</option>
          <option value="desc">Newest to Oldest</option>
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
  posts: state.posts.posts
});

export default connect(mapStateToProps, { fetchPosts })(Blog);