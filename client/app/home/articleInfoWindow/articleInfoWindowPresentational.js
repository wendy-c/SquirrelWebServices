import React, { PropTypes } from 'react';

const ArticleInfoWindowPresentational = (props) => {
  return (
    <div className='article card small hoverable'>
      <div className='articleheader'>
        <img className="userImg" src={props.image}/>
        <h4>{props.title}</h4>
      </div>
      <p>{props.excerpt}</p>
    </div>
    );
};

export default ArticleInfoWindowPresentational;