import React, { PropTypes } from 'react';

const LoginPresentational = (props) => {
    return (
      <div className='signupbox'>
        <main>
            <center>
              <div className="section"></div>
              <h5 className="grey-text">Welcome back. Log in.</h5>
              <div className="section"></div>

              <div className="container">
                <div className="loginWidth" className="z-depth-1 grey lighten-4 row" style={{display: 'inline-block', padding: '32px 48px 0px 48px', border: '1px solid #EEE'}}>

                  <form id='loginform' onSubmit={props.handleSubmit} className="col s12">
                    <div className='row'>
                      <div className='col s12'>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='input-field col s12'>
                        <input onChange={props.getRefUsername} className='validate' type='text' name='text' id='text' />
                        <label htmlFor='text'>Enter your username</label>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='input-field col s12'>
                        <input onChange={props.getRefPassword} className='validate' type='password' name='password' id='password' />
                        <label htmlFor='password'>Enter your password</label>
                        <br/>
                      </div>
                    </div>
                    <center>
                      <div className='row'>
                        <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect teal lighten-2'>Login</button>
                        <br/>
                        <p style={{fontSize: '12px'}} className='grey-text'>{props.message}</p>
                      </div>
                    </center>
                  </form>
                </div>
              </div>
              <a href="#/signup">Create account</a>
            </center>

            <div className="section"></div>
            <div className="section"></div>
          </main>
      </div>
      );
};

export default LoginPresentational;


