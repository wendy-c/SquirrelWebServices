import React from 'react';
import ArticleInfoWindowContainer from '../articleInfoWindow/articleInfoWindowContainer';

const UserInboxPresentational = (props) => {
  return (
    <div className='userinbox'>
      <h5>User Inbox Stuff</h5>
      <div className='userinboxarticles'>
        {props.children}
      </div>
    </div>
    );
}

export default UserInboxPresentational;