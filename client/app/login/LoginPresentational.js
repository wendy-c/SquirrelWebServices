import React, { PropTypes } from 'react';

const LoginPresentational = (props) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper white">
        </div>
      </nav>
        <div className="row center">
          <a href="/auth/facebook" id="download-button" className="btn-large waves-effect waves-light blue lighten-1">Log in with Facebook</a>
        </div>
        <div className="row center">
          <a href="/auth/twitter" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Log in with Twitter</a>
        </div>
    </div>
    );
}

export default LoginPresentational;
