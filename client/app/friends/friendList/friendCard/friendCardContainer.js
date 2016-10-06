import React, { PropTypes } from 'react';
import FriendCardPresentational from './friendCardPresentational';

class FriendCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log('i am in FriendCardContainer', this.props);
    return (
      <div onClick={() => this.props.handleClick(this.props.friend)}>
      <FriendCardPresentational name={this.props.friend.fbname} avatar={this.props.friend.avatar} links={this.props.friend.links}/>
      </div>
      );
  }
}

export default FriendCardContainer; 