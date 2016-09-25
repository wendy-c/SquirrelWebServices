import React, { PropTypes } from 'react';
import UserInboxPresentational from './UserInboxPresentational';

class UserInboxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
    <UserInboxPresentational />
    );
  }
}

export default UserInboxContainer;
