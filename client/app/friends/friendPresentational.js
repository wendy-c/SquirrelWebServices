import React, { PropTypes } from 'react'

const FriendPresentational = (props) => {
  return (
    <div className="friendpresentational">
      <h5>Squirrel around for friends</h5>
      {props.children}
    </div>
    )
}

export default FriendPresentational