import React, { PropTypes } from 'react';
import FriendSearchBarPresentational from './friendSearchBarPresentational';
import axios from 'axios';

class FriendSearchBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: []
    };
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({input: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var friend = this.state.input;
    var input = document.getElementById('inputClear').value = '';
    this.setState({input: ''});
    console.log(friend);
     //do some http POST with url
    // this.searchFriend(friend);
    this.props.updateToSearchResult(['test test']);
  }

  searchFriend() {
    //look for friends with matching name
    // axios.get('/')
    //   .then((res) => {

    //   })
    //   .catch((err) => {

    //   });
  }

  render() {
    return (
      <FriendSearchBarPresentational onSubmit={this.handleSubmit.bind(this)} onChange={this.handleInputChange.bind(this)}/>
     );
  }
}

export default FriendSearchBarContainer;