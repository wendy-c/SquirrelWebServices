import React, { PropTypes } from 'react';
import HomePresentational from './HomePresentational';
import NavBarContainer from './NavBar/NavBarContainer';
import FriendInboxContainer from './friendInbox/friendInboxContainer';
import UserInboxContainer from './userInbox/userInboxContainer';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
    <div style={{'height': '100%', 'width': '100%'}}>
      <NavBarContainer />
      <HomePresentational />
      <div className='inboxmain'>
        <UserInboxContainer />
        <FriendInboxContainer />
      </div>
    </div>
    );
  }
}

export default HomeContainer;
