import React from 'react';

const SignupConfirmPresentational = (props) => {
  return (
    <div>
      <img src={props.avatar} className=""/>
      <h5>Hi {this.props.displayName}</h5>
      <span>Your Squirrel username is {this.props.username}</span>
      <button type='submit' name='btn_login' onClick={this.props.handleSubmit} className='col s12 btn btn-large waves-effect teal lighten-2'>CONFIRM</button>
    </div>
    );
};

export default SignupConfirmPresentational;