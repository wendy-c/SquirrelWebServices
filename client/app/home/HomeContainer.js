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
      articlesFromFriends: []
    };
    this.getUserArticles = this.getUserArticles.bind(this);
  }

  componentDidMount() {
    var context = this;
    //get user name and id
    axios.get('/checkAuth')
      .then(function(user) {
        //console.log(user, 'this is the data in componentWillMount');
        context.setState({
          user: user.data,
          articles: [],
          userLinks: [],
          linksFromFriends: []
        });
      })
      .then(function(user) {
        //get user articles
        axios.get('http://wwww.localhost:8888/links/' + context.state.user.fbid)
          .then(function(links) {
            console.log('what links am i getting back???????', links);
            //getting back array of objects links.data = [{assignee: 'FriendsID', categoryId: '', createdAt: '...', id: int, likes: int, owner: 'userID', updatedAt: '...', 'url: 'url', userFbid: ''}, {link2}, {link3}]
            context.setState({
              articles: links.data
            });
          })
          .then(function(res) {
            context.getUserArticles();
          });
        
      });

  }

  getUserArticles() {
    var userArticles = this.state.articles.filter((link) => {
      return link.owner === this.state.user.fbid;
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
      return link.owner !== this.state.user.fbid;
    }).map((item) => {
      return {assignee: item.assignee, url: item.url};
    });
    this.setState({
      articlesFromFriends: articlesFromFriends
    });
  }

  render() {
      //console.log('what is user in componentDidMount', this.state.user);
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
