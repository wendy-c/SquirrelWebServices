import React, { PropTypes } from 'react';
import LoginPresentational from './LoginPresentational';
import axios from 'axios';


class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: 'please enter username and password', 
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    console.log(process.env, 'PROCESS STUFF?');
    // this.username.value = '';
    // this.password.value = '';
    axios.post('/login2', {username: username, password: password})
    // axios.get('http://db:8888/test')
    .then((data) => {
      console.log(data, 'did it work? PLEASE WORK!');
      this.context.router.push('/home');
    })
    .catch((err) => {
      console.log(err, 'error')
      this.setState({message: 'Incorrect username or password'})
    })

    document.getElementById('loginform').reset();
  }

  getRefUsername(e) {
    this.setState({username: e.target.value});
    console.log(e.target.value);
  }

  getRefPassword(e) {
    this.setState({password: e.target.value});
  }

  render() {
    return (
    <LoginPresentational message={this.state.message} getRefUsername={this.getRefUsername.bind(this)} getRefPassword={this.getRefPassword.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
    );
  }
}

LoginContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LoginContainer;