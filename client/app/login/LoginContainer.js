import React, { PropTypes } from 'react';
import LoginPresentational from './LoginPresentational';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
    <LoginPresentational />
    );
  }
}

export default LoginContainer;
