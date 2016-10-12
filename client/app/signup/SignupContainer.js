import React, { PropTypes } from 'react';
import SignUpPresentational from './SignupPresentational'; 
import axios from 'axios'; 


class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      message: 'please choose a username and password',
      isFacebook: false,
      fbid: '',
      displayName: '',
      avatar: ''
    };
    this.validateFacebook = this.validateFacebook.bind(this);
  }

  componentWillMount() {
    console.log('i am in SignUpContainer componentWillUpdate');
    this.validateFacebook();
  }
 
  handleSubmit(e) {
    console.log('signup submit>>>>>>>>>>>>>>>>>', this.state);
    e.preventDefault();
    const username = this.state.username; 
    const password = this.state.password;
    const fbid = this.state.fbid;
    if (this.state.password === this.state.confirmPassword) {
      axios.post('/signup2', {username: username, password: password, fbid: fbid})
      .then((data) => {
        console.log('WHAT DO YOU GET AFTER IMMEDIATE SIGN UP?', data);
        //(do the signing in for the client);
      axios.post('/login2', {username: data.data.fbid, password: data.data.fbname})
        .then((data) => {
            console.log(data.data, 'data.data');
            this.context.router.push('/home');
          });
      })
      .catch((err) => { 
        console.log(err, 'error');
        this.setState({message: 'Username already in use. Please try a different one.'});
      });

      document.getElementById('loginform').reset();    
    } else {
      this.setState({message: 'Password does not match'});
    }
  }

  getRefUsername(e) {
    this.setState({username: e.target.value});
    console.log(e.target.value);
  }

  getRefPassword(e) {
    this.setState({password: e.target.value});
  }

  getRefConfirmPassword(e) {
    this.setState({confirmPassword: e.target.value});
  }

  validateFacebook() {
    axios.get('/checkAuth')
    .then((user) => {
      if (user.data !== '') {
        console.log('in validateFacebook, what is user??????', user.data);
        this.setState({
          isFacebook: true,
          fbid: user.data.fbid,
          displayName: user.data.fbname,
          avatar: user.data.avatar,
        });  
      } 
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    console.log(this.state.message);
    return (
    <SignUpPresentational fbid={this.state.fbid} avatar={this.state.avatar} displayName={this.state.displayName} message={this.state.message} getRefUsername={this.getRefUsername.bind(this)} getRefPassword={this.getRefPassword.bind(this)} getRefConfirmPassword={this.getRefConfirmPassword.bind(this)} handleSubmit={this.handleSubmit.bind(this)} isFacebook={this.state.isFacebook}/>
    );
  }
}

SignUpContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default SignUpContainer;