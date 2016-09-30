import React, { PropTypes } from 'react'
import FriendCardPresentational from './friendCardPresentational'

class FriendCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <FriendCardPresentational />
      )
  }
}

export default FriendCardContainer; 