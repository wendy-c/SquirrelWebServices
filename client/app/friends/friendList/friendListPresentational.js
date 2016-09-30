import React, { PropTypes } from 'react'

const FriendListPresentational = (props) => {
  return (
    <div>
      <h5>Friends List Component</h5>
      {props.children}
    </div>
    )
}

export default FriendListPresentational