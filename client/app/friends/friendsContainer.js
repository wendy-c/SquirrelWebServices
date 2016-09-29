import React, { PropTypes } from 'react'
import FriendsPresentational from './friendsPresentational'

class FriendsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <FriendsPresentational />
      )
  }
}

export default FriendsContainer