import React, { PropTypes } from 'react';
import SignUpPresentational from './SignupPresentational';
import axios from 'axios';
import * as actions from '../actions/index';
import {connect} from 'react-redux';


class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   username: '',
    //   password: '',
    //   message: 'please choose a username and password',
    // };
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.props.username;
    const password = this.props.password;
    // this.username.value = '';
    // this.password.value = '';
    axios.post('http://localhost:8888/signup', {username: username, password: password})
    .then((data) => {
      console.log('WHAT DO YOU GET AFTER IMMEDIATE SIGN UP?', data);
      //(do the signing in for the client);
      axios.post('http://localhost:3010/login2', {username: data.data.fbid, password: data.data.fbname})
        .then((data) => {
          console.log(data.data, 'data.data');
          this.context.router.push('/home');
        });
    })
    .catch((err) => {
      console.log(err, 'error');
      // this.setState({message: 'Username already in use. Please try a different one.'});
      this.props.dispatch(actions.updateSignupMessage('Username already in use. Please try a different one.'));
    });

    document.getElementById('loginform').reset();
  }

  getRefUsername(e) {
    // this.setState({username: e.target.value});
    this.props.dispatch(actions.updateSignupUsername(e.target.value));
    console.log(e.target.value);
  }

  getRefPassword(e) {
    // this.setState({password: e.target.value});
    this.props.dispatch(actions.updateSignupPassword(e.target.value));
  }

  render() {
    return (
    <SignUpPresentational message={this.props.message} getRefUsername={this.getRefUsername.bind(this)} getRefPassword={this.getRefPassword.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
    );
  }
}

SignUpContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log('mapStatetoProps:', state);
  return {
    username: state.signup.username,
    password: state.signup.password,
    message: state.signup.message, 
  };
}

export default connect(mapStateToProps)(SignUpContainer);