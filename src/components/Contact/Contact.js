// Contact.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPage } from '../actions/wordpressAPIActions';

class Contact extends Component {
  componentDidMount() {
    this.props.fetchPage(2); // Replace 2 with the ID of your contact page
  }

  render() {
    const { page } = this.props;

    if (!page) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{page.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.pages.page
});

export default connect(mapStateToProps, { fetchPage })(Contact);