import React, { PropTypes } from 'react';
import HomePresentational from './HomePresentational';
import FriendInboxContainer from './friendInbox/friendInboxContainer';
import UserInboxContainer from './userInbox/userInboxContainer';
import InputBarContainer from './inputBar/inputBarContainer';
import RecommendationContainer from './recommendation/recommendationContainer';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      articles: '',
      userArticles: [],
      userFriendsList: [{fbid: '0', fbname: 'Friends'}],
      articlesFromFriends: [],
    };
  }

  componentDidMount() {
  //get user name and id
    axios.get('/checkAuth')
    .then((user)=>{
      this.setState({user: user.data});
      return axios.get('/links/' + user.data.fbid);
    })
    .then((links) => {
      console.log(links, 'links links links');
      this.setState({articles: links.data[0]}, ()=>{
        this.sortArticles();
      });
      return axios.get('/friends/nameonly/' + this.state.user.fbid);
    })
    .then((friends) => {
      console.log(friends.data, 'friends.data');
      var updatedFriends = this.state.userFriendsList.slice();
      updatedFriends[0].fbid = this.state.user.fbid;
      updatedFriends = updatedFriends.concat(friends.data);
      this.setState({userFriendsList: updatedFriends});
    })  
    .catch((err)=> {
      console.log(err);
    });
  }

  shouldComponentUpdate(state, props){
    // console.log(state, props);
    return true;
  }

  sortArticles() {
    console.log(this.state.articles, 'testing this once');

    const userArticles = this.state.articles.filter((link) => {
        return link.assignee === this.state.user.fbid;
      }).map((item) => {
        return {url: item.url, createdAt: item.createdAt};
      });

    const articlesFromFriends = this.state.articles.filter((link) => {
        return link.assignee !== this.state.user.fbid;
      }).map((item) => {
        return {assignee: item.assignee, url: item.url, createdAt: item.createdAt};
      });
      console.log(userArticles, articlesFromFriends, 'im here');
    this.setState({
      userArticles: userArticles,
      articlesFromFriends: articlesFromFriends, 
    });
  }

  handleUpdateInbox(url, owner, assignee) {
    axios.put(`/links/friends/${owner}/${assignee}`, {link: url})
    .then((data) => {
      if (owner === this.state.user.fbid) {
        console.log('updating yolo');
        //WHAT IS THIS THING HERE?
        // axios.get('http://localhost:8367').then((data) => {
        //   console.log('Message Recieved', data);
        // })
        // .catch((err) => {
        //   console.log('get request to 8367 err');
        // })
        
        axios.get('/links/' + this.state.user.fbid)
        .then((links) => {
          this.setState({articles: links.data[0]}, ()=>{
            this.sortArticles();
          });
        })
        .catch((err)=> {
          console.log(err);
        });
      }
    })
    .catch((err) => {
      console.log('error in inputBarContainer handleSubmit', err);
    });
  }

  render() {
    return (
    <div style={{'height': '100%', 'width': '100%'}}>
      <HomePresentational >
        <InputBarContainer friends={this.state.userFriendsList} handleUpdateInbox={this.handleUpdateInbox.bind(this)} userId={this.state.user}/>
        <div className="col s12">
          <RecommendationContainer/>
        </div>
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