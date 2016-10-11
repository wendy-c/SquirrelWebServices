import React from 'react'; 

const FriendInboxPresentational = (props) => {
  return (
    <div className='friendinbox'>
      <h5 className="h5-head">inbox from followers</h5>
      <div className='friendinboxarticles'>
        {props.children}
      </div>
    </div>
    );
};

export default FriendInboxPresentational;