import React, { PropTypes } from 'react';

const LoginPresentational = (props) => {
  return (
    <div>
      <div>
        <br />
        <h3 className="header">Save Articles, Read Offline, Share with Friends</h3>
        <br />
        <br />
        <img className="bk-image" src="styles/img/background-wood.png"/>
      </div>

      <div className='buttoncontainer'>
        <h5 className="sub-head">Get started</h5>
        <br />
        <div className="loginBody">
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
          <div className="row center">
            <button className="downloadBtn">
              <h5>Download</h5>
              <h6>Squirrel beta 1.0</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default LoginPresentational;

