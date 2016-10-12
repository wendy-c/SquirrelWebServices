import React from 'react';

const SignupWithFacebookPresentational = (props) => {
  const whichView = isFacebook ? 
  'go to confirm view' 
  (
    <div>
      <img src="props.avatar" className=""/>
      <h5>Hi {props.displayName}</h5>
      <span>Your Squirrel username is {props.username}</span>
      <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect teal lighten-2'>CONFIRM</button>
    </div>
    )
  :
  (
    <div className="step-one">
      <span className="signup-text"> Add your facebook avatar </span>
      <a href="/auth/facebook" id="oauth download-button" className="btn-large waves-effect waves-light blue lighten-1">Login with Facebook</a>
    </div> 
  );

  return (
      <div>{whichView}</div>
    );
};

export default SignupWithFacebookPresentational;