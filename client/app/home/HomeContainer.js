import React, { PropTypes } from 'react';
import HomePresentational from './HomePresentational';
import FriendInboxContainer from './friendInbox/friendInboxContainer';
import UserInboxContainer from './userInbox/userInboxContainer';
import InputBarContainer from './inputBar/inputBarContainer';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';
import * as actions from '../actions/index';
import {connect} from 'react-redux';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   user: '',
    //   articles: '',
    //   userArticles: [],
    //   userFriendsList: [{fbid: '0', fbname: 'Friends'}],
    //   articlesFromFriends: [],
    // };
  }

  componentDidMount() {
  //get user name and id
  console.log('what is in props in HomeContainer>>>>>', this.props);
    axios.get('/checkAuth')
    .then((user)=>{
      // this.setState({user: user.data})
      this.props.dispatch(actions.getUser(user.data));
      return axios.get('http://wwww.localhost:8888/links/' + user.data.fbid);
    })
    .then((links) => {
      this.setState({AllArticles: links.data[0]}, ()=>{
        this.sortArticles();
      });
      // Promise.resolve(this.props.dispatch(actions.updateAllArticles(links.data[0])))
      //   .then((res) => {
      //     this.sortArticles();
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      return axios.get('http://wwww.localhost:8888/friends/nameonly/' + this.state.user.fbid);
    })
    .then((friends) => {
      // console.log(friends.data, 'friends.data');
      var updatedFriends = this.props.userFriendsList.slice();
      updatedFriends[0].fbid = this.props.user.fbid;
      updatedFriends = updatedFriends.concat(friends.data);
      // this.setState({userFriendsList: updatedFriends});
      this.props.dispatch(actions.updateFriends(updatedFriends));
    })  
    .catch((err)=> {
      console.log(err);
    });
  }

  shouldComponentUpdate(state, props) {
    // console.log(state, props);
    return true;
  }

  sortArticles() {
    console.log(this.props.allArticles, 'testing this once');

    const userArticles = this.props.allArticles.filter((link) => {
        return link.assignee === this.props.user.fbid;
      }).map((item) => {
        return {url: item.url, createdAt: item.createdAt};
      });

    const articlesFromFriends = this.props.allArticles.filter((link) => {
        return link.assignee !== this.props.user.fbid;
      }).map((item) => {
        return {assignee: item.assignee, url: item.url, createdAt: item.createdAt};
      });
      // console.log(userArticles, articlesFromFriends, 'im here');
    // this.setState({
    //   userArticles: userArticles,
    //   articlesFromFriends: articlesFromFriends, 
    // });
    this.props.dispatch();
  }

  handleUpdateInbox(url, owner, assignee) {
    axios.put(`http://localhost:8888/links/friends/${owner}/${assignee}`, {link: url})
    .then((data) => {
      if (owner === this.props.user.fbid) {
        console.log('updating yolo');

        axios.get('http://localhost:8367').then((data) => {
          console.log('Message Recieved', data);
        })
        .catch((err) => {
          console.log('get request to 8367 err');
        });
        
        axios.get('http://wwww.localhost:8888/links/' + this.props.user.fbid)
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
    console.log(this.props.userArticles, 'hello world');
    return (
    <div style={{'height': '100%', 'width': '100%'}}>
      <HomePresentational >
        <InputBarContainer friends={this.props.userFriendsList} handleUpdateInbox={this.handleUpdateInbox.bind(this)} userId={this.props.user}/>
        <div className='row inboxmain'>
          <div className='col s8 grey lighten-5'>
            <Scrollbars style={{ height: 600 }}>
              <UserInboxContainer user={this.props.user} articles={this.props.userArticles}/>
            </Scrollbars>
          </div>
          <div className='col s4 grey lighten-3'>
            <Scrollbars style={{ height: 600 }}>
              <FriendInboxContainer user={this.props.user} articles={this.props.articlesFromFriends} />
            </Scrollbars>
          </div>
        </div>
      </HomePresentational>
    </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state in HomeContainer', state);
  return {
    user: state.login.user,
    allArticles: state.home.allArticles,
    userArticles: state.home.userArticles,
    articlesFromFriends: state.home.articlesFromFriends,
    userFriendsList: state.home.userFriendsList
  };
}

export default connect(mapStateToProps)(HomeContainer);
