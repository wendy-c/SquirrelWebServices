import React, { Proptypes } from 'react';
import InputBarPresentational from './InputBarPresentational';
import axios from 'axios';

var hardCodedUserID = '10105564501516258'

class InputBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }


  handleInputChange(e) {
    e.preventDefault();
    this.setState({input: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var inputUrl = this.state.input;
    var input = document.getElementById('inputClear').value = '';
    this.setState({input: ''});
    console.log(inputUrl);
    //do some http POST with url
    axios.put('http://localhost:8888/links/' + this.props.userId, {
      url: inputUrl
    })
    .then(function(data){
      console.log(data);
    })
    .catch(function(err){
      console.log('error in inputBarContainer handleSubmit', err);
    })
  }

  render() {
    return (
      <InputBarPresentational onSubmit={this.handleSubmit.bind(this)} onChange={this.handleInputChange.bind(this)}/>
    )
  }
}

export default InputBarContainer;
