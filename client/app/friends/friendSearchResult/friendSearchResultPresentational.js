import React from 'react';

const FriendSearchResultPresentational = (props) => {
  console.log('i am in FriendSearchResultPresentational', props.user);
  return (
    <div className="card-panel grey lighten-5 z-depth-1" onClick={() => props.addFriend(props.user)}>
      <div className='row align-wrapper'>
        <div className="col s2">
          <img src={props.user.avatar} alt="" className="circle responsive-img"/>
        </div>
        <div className="col s10">
          <span className="black-text">
            {props.user.fbname}
          </span>
          <button className="addFriendBtn">Follow</button>
        </div>
      </div>
    </div>
    );

};

export default FriendSearchResultPresentational;