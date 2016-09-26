import React, {PropTypes} from 'react';
import RootPresentational from './rootPresentational.jsx';
import Login from './login/loginContainer.jsx';
import UserHome from './userHome/userHomeContainer.jsx';

export class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: '' 
    };
  }

  checkAuth() {
    //check if user is authorize 
    //grab user info and store in state
  }

  render() {
    return (
      <div>
        <RootPresentational>
          <UserHome user={this.state.user}/>
        </RootPresentational>
      
        <RootPresentational user={this.state.user}>
          <Login />
        </RootPresentational>
      </div>
      );
  }
}