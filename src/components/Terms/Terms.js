// Terms.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPage } from '../actions/wordpressAPIActions';

function Terms(props) {
  const { fetchPage, page } = props;

  useEffect(() => {
    fetchPage(4); // Replace 4 with the ID of your terms page
  }, [fetchPage]);

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

const mapStateToProps = state => ({
  page: state.pages.page
});

export default connect(mapStateToProps, { fetchPage })(Terms);