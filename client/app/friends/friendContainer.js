import React, { PropTypes } from 'react'
import FriendPresentational from './friendPresentational'
import FriendListContainer from './friendList/friendListContainer';
import FriendArticleListContainer from './friendArticleList/friendArticleListContainer';
import FriendSearchBarContainer from './friendSearchBar/friendSearchBarContainer';
import { Scrollbars } from 'react-custom-scrollbars';


class FriendContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  searchFriends() {

  }

  addFriends() {
    
  }

  render() {
    return (
      <div style={{'height': '100%', 'width': '100%'}}>
      <FriendPresentational>
        <div className='friendsearchbar'>
          <FriendSearchBarContainer/>
        </div>
        <div className='friendbody row'>
          <div className='friendlist col s4 grey lighten-5'>
            <Scrollbars style={{ height: 600 }}>
              <FriendListContainer/>
            </Scrollbars>
          </div>
          <div className='friendarticle col s8 grey lighten-3'>
            <Scrollbars style={{ height: 600 }}>
              <FriendArticleListContainer/>
            </Scrollbars>
          </div>
        </div>
      </FriendPresentational>
      </div>
      )
  }
}

export default FriendContainer