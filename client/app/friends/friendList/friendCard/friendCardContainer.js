import React, { PropTypes } from 'react';
import FriendCardPresentational from './friendCardPresentational';

class FriendCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div onClick={() => this.props.handleClick(this.props.friend)}>
      <FriendCardPresentational name={this.props.friend.fbname}/>
      </div>
      );
  }
}

export default FriendCardContainer; 