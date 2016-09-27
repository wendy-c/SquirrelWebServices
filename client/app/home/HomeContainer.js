import React, { PropTypes } from 'react';
import HomePresentational from './HomePresentational';
import FriendInboxContainer from './friendInbox/friendInboxContainer';
import UserInboxContainer from './userInbox/userInboxContainer';
import axios from 'axios'

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    axios.get('/checkAuth')
      .then(function(data){
        console.log(data, 'this is the data in componentWillMount');
      })
  }

  render() {
    return (
    <div style={{'height': '100%', 'width': '100%'}}>
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
