import React from 'react';

const FriendInboxPresentational = (props) => {
  return (
    <div className='friendinbox'>
      <h5>Recommendations</h5>
      <div className='userinboxarticles'>
        {props.children}
      </div>
    </div>
    );
}

export default FriendInboxPresentational;