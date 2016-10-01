import React, { PropTypes } from 'react';
import FriendPresentational from './friendPresentational';
// import FriendListContainer from './friendList/friendListContainer';
import FriendArticleListContainer from './friendArticleList/friendArticleListContainer';
import FriendSearchBarContainer from './friendSearchBar/friendSearchBarContainer';
import FriendCardContainer from './friendList/friendCard/friendCardContainer';
import { Scrollbars } from 'react-custom-scrollbars';
import axios from 'axios';


class FriendContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      selected: '',
      friends: []
    };
    this.updateFriendArticles = this.updateFriendArticles.bind(this);
  }

  componentWillMount() {
    var context = this;
    //get user name and id

    axios.get('/checkAuth')
      .then((user) => {
        this.setState({
          user: user.data,
        });
        return axios.get('http://wwww.localhost:8888/friends/' + this.state.user.fbid)
          .then((friends) => {
            this.setState({
              friends: friends.data.friends
            });
          })
          .catch((err) => {
            console.log('There is an err in friendContainer, it\'s a sad day D=', err);
          });

      })
      .catch((err) => {
        console.log('There is an error in friendContainer getting user, it\'s a sad day D=', err);
      });

  }

  searchFriends() {

  }

  addFriends() {
    
  }

  updateFriendArticles(friend) {
    console.log('in updateFriendArticles>>>>>>> or not');
    this.setState({
      selected: friend
    });
  }

  render() {
    console.log('i am in friendContainer, who is being selected? >>>>>>>', this.state.selected);
    return (
      <div style={{'height': '100%', 'width': '100%'}}>
      <FriendPresentational>
        <div className='friendsearchbar'>
          <FriendSearchBarContainer/>
        </div>
        <div className='friendbody row'>
          <div className='friendlist col s4 grey lighten-5'>
            <Scrollbars style={{ height: 600 }}>
            {this.state.friends.map((friend, idx) => {
              return (
                <FriendCardContainer friend={friend} key={idx} handleClick={this.updateFriendArticles} />
                );
            })}
            </Scrollbars>
          </div>
          <div className='friendarticle col s8 grey lighten-3'>
            <Scrollbars style={{ height: 600 }}>
              <FriendArticleListContainer friend={this.state.selected}/>
            </Scrollbars>
          </div>
        </div>
      </FriendPresentational>
      </div>
      );
  }
}

export default FriendContainer;