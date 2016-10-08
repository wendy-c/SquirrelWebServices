import React from 'react'; 
import ArticleInfoWindowContainer from '../articleInfoWindow/articleInfoWindowContainer';

const UserInboxPresentational = (props) => {
  return (
    <div className='userinbox'>
      <div className='userinbox_header'>
        <h5 className="h5-head">your stash</h5>
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