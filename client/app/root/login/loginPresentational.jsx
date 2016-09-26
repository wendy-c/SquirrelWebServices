import React from 'react';

export const LoginPresentational = (props) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper white">
          <img id="logo" className="brand-logo" src="IMG_0849.png"/>
        </div>
      </nav>
      <div className="container row center">
        <br />
        <a href="/auth/facebook" id="oauth download-button" className="btn-large waves-effect waves-light blue lighten-1">Login with Facebook</a>
        <a href="/auth/twitter" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Login with Twitter</a>
      </div>
    </div>
    );
};