import React, { PropTypes } from 'react';

const LoginPresentational = (props) => {
  return (
    <div className='buttoncontainer'>
      <div className="container loginBody">
        <div className="row center">
          <a href='/auth/facebook' className="loginBtn loginBtn--facebook">
            Login with Facebook
          </a>
        </div>
        <div className="row center">
          <a className="loginBtn loginBtn--twitter">
             Login with Twitter
          </a>
        </div>
      </div>
    </div>
    );
};

export default LoginPresentational;

