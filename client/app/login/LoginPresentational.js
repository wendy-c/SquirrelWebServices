import React, { PropTypes } from 'react';

const LoginPresentational = (props) => {
  return (
    <div>
      <div className="container loginBody">
        <div className="row center">
          <a href="/auth/facebook" id="download-button" className="btn-large waves-effect waves-light deep-orange darken-2 loginbuttons">
            <img className="login-logo" src="img/fb.png"/>
            Login
          </a>
        </div>
        <div className="row center">
          <a href="/auth/twitter" id="download-button" className="btn-large waves-effect waves-light deep-orange darken-2 loginbuttons">
            <img className="login-logo" src="img/twitter.png"/>
            Login
          </a>
        </div>
      </div>
    </div>
    );
};

export default LoginPresentational;
