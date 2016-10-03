import React from 'react';
import FriendSearchResultPresentational from './friendSearchResultPresentational';
import axios from 'axios';

class FriendSearchResultContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.addFriend = this.addFriend.bind(this);
  }

  //put friend to db
  addFriend(friendId) {
    console.log('are you getting friendId', this.props.user.fbid);
    axios.put('http://localhost:8888/friends/' + this.props.user.fbid, {friend: friendId})
      .then((res) => {
        console.log('you have successfully added this person to the stalking list');
        //re-render friend's list with new person
      })
      .catch((err) => {
        console.log('There is an error in FriendSearchResultContainer, it\'s a sad day! D=', err);
      });
  }

  render() {
    //this.props.result is an array of search result users
    console.log('made it to SearchResult', this.props);
    return (
      <div>
      {this.props.result.map((item, idx) => {
        return (
          <div>
          <FriendSearchResultPresentational key={idx} user={item} addFriend={this.addFriend}/>
          </div>
          );
      })}
      </div>
    );
  }

}

export default FriendSearchResultContainer;