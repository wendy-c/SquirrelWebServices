import React from 'react';
import ArticleInfoWindowContainer from '../articleInfoWindow/articleInfoWindowContainer';

const UserInboxPresentational = (props) => {
  return (
    <div className='userinbox'>
      <div className='userinbox_header'>
        <h5>User Inbox Stuff</h5>
      </div>
      <div>
        <div className="row">
        <div className="col s12 m6" className='userinboxarticles'>
          {props.children}
        </div>
        </div>
      </div>
    </div>
    );
};

export default UserInboxPresentational;