import React, { PropTypes } from 'react';

const FriendArticleListPresentational = (props) => {
  return (
    <div>
      <h5>{props.friend.fbname}'s Read List</h5>
      <div className='friendarticle'>
        {props.children}
      </div>
    </div>
    );
};

export default FriendArticleListPresentational;