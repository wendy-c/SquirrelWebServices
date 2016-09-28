import React, { PropTypes } from 'react';

const ArticleInfoWindowPresentational = (props) => {
  return (
    <div className='article card small hoverable'>
      <div className='articleheader'>
        <img src={this.props.image}/>
        <h4>{this.props.title}</h4>
      </div>
      <p>{this.props.excerpt}</p>
    </div>
    );
};

export default ArticleInfoWindowPresentational;