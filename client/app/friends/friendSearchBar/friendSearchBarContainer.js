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
     //do some http POST with url
    this.searchFriend();
    // this.props.updateToSearchResult(['test test']);
  }

  searchFriend() {
    //look for friends with matching name
    // console.log('i am in FriendSearchBarContainer', this.state.input);
    axios.get('/searchFriend')
      .then((res) => {
        // console.log('am i getting res', res.data);
        this.setState({result: res.data});
        return res.data;
      }).then((result) => {
        this.props.updateToSearchResult(result);     
      })
      .catch((err) => {
        console.log('There is an error in FriendSearchBarContainer, it\'s a sad day! D=', err);
      });
  }

  render() {
    return (
      <FriendSearchBarPresentational onSubmit={this.handleSubmit.bind(this)} onChange={this.handleInputChange.bind(this)}/>
     );
  }
}

export default FriendSearchBarContainer;