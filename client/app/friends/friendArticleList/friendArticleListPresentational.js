import React, { PropTypes } from 'react';

const FriendArticleListPresentational = (props) => {
  return (
    <div>
      <h5>[FriendName goes here] articles</h5>
      <div className='friendarticle'>
        {props.children}
      </div>
    </div>
    );
};

export default FriendArticleListPresentational;