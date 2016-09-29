import React, { PropTypes } from 'react';
import HomePresentational from './HomePresentational';
import FriendInboxContainer from './friendInbox/friendInboxContainer';
import UserInboxContainer from './userInbox/userInboxContainer';
import InputBarContainer from './inputBar/inputBarContainer';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      userArticles: [],
      userFriendsList: [],
      articlesFromFriends: [],
    };
    this.getUserArticles = this.getUserArticles.bind(this);
  }

  componentWillMount() {
    var context = this;
    //get user name and id

    axios.get('/checkAuth')
<<<<<<< 2a0e1cdf6b05c236b89a7f5b4172c28f2c9204e7
      .then((user) => {
=======
      .then((user) => {        
>>>>>>> implement logout functionality and navigation button functionality
        context.setState({
          user: user.data,
        });
        axios.get('http://wwww.localhost:8888/links/' + context.state.user.fbid)
          .then((links) => {
            //getting back array of objects links.data = [{assignee: 'FriendsID', categoryId: '', createdAt: '...', id: int, likes: int, owner: 'userID', updatedAt: '...', 'url: 'url', userFbid: ''}, {link2}, {link3}]
            this.setState({
              articles: links.data
            });
          })
          .then((res) => {
          //get user articles
            context.getUserArticles();
            context.getArticlesFromFriends();
          })
          .catch((err) => {
            console.log('There is an err in HomeContainer, it\'s a sad day D=', err);
          });

      })
      .catch((err) => {
        console.log('There is an error in HomeContainer getting user, it\'s a sad day D=', err);
      });
  }

  getUserArticles() {
    var userArticles = this.state.articles.filter((link) => {
      return link.assignee === this.state.user.fbid;
    }).map((item) => {
      return {url: item.url, createdAt: item.createdAt};
    });
    // console.log('i am in getUserArticles===>>>>>', userArticles);
    this.setState({
      userArticles: userArticles 
    });
  }

  getArticlesFromFriends() {
    var articlesFromFriends = this.state.articles.filter((link) => {
      return link.assignee !== this.state.user.fbid;
    }).map((item) => {
      return {assignee: item.assignee, url: item.url, createdAt: item.createdAt};
    });
    console.log('i am in getArticlesFromFriends>>>>>>>', articlesFromFriends);
    this.setState({
      articlesFromFriends: articlesFromFriends
    });
  }  

  render() {
    return (
    <div style={{'height': '100%', 'width': '100%'}}>
      <HomePresentational >
        <InputBarContainer userId={this.state.userId}/>
        <div className='row inboxmain'>
          <div className='col s8 grey lighten-5'>
            <Scrollbars style={{ height: 600 }}>
              <UserInboxContainer user={this.state.user} articles={this.state.userArticles}/>
            </Scrollbars>
          </div>
          <div className='col s4 grey lighten-3'>
            <Scrollbars style={{ height: 600 }}>
              <FriendInboxContainer user={this.state.user} articles={this.state.articlesFromFriends} />
            </Scrollbars>
          </div>
        </div>
      </HomePresentational>
    </div>
    );
  }
}

export default HomeContainer;
