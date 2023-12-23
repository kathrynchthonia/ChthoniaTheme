// Post.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/wordpressAPIActions';

class Post extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.posts.post
});

export default connect(mapStateToProps, { fetchPost })(Post);