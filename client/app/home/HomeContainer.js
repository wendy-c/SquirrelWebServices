import React, { PropTypes } from 'react';
import HomePresentational from './HomePresentational';
import FriendInboxContainer from './friendInbox/friendInboxContainer';
import UserInboxContainer from './userInbox/userInboxContainer';
import axios from 'axios'
import { Scrollbars } from 'react-custom-scrollbars';

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
      <HomePresentational >
        <div className='row inboxmain'>
          <div className='col s8 orange lighten-4'>
            <Scrollbars style={{ height: 600 }}>
              <UserInboxContainer />
            </Scrollbars>
          </div>
          <div className='col s4 grey lighten-3'>
            <Scrollbars style={{ height: 600 }}>
              <FriendInboxContainer />
            </Scrollbars>
          </div>
        </div>

      </HomePresentational>
    </div>
    );
  }
}

export default HomeContainer;
