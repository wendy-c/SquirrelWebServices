 import React, { PropTypes } from 'react';

const SignUpPresentational = (props) => {
  console.log('in SignUpPresentational, what is props', props);

  return (
    <div className='signupbox'>
      <main>
          <center>
            <div className="section"></div>

            <h5 className="grey-text">Ready to Squirrel stuff away?</h5>
            <div className="section"></div>

            <div className="container">
              <div className="z-depth-1 grey lighten-4 row" style={{display: 'inline-block', padding: '32px 48px 0px 48px', border: '1px solid #EEE'}}>

                <form id='loginform' onSubmit={props.handleSubmit} className="col s12">
                  <div className='row'>
                    <div className='col s12'>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='input-field col s12'>
                      <input onChange={props.getRefUsername} className='validate' type='text' name='text' id='text' />
                      <label htmlFor='text'>Create a username</label>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='input-field col s12'>
                      <input onChange={props.getRefPassword} className='validate' type='password' name='password' id='password' />
                      <label htmlFor='password'>Create a password</label>
                      <br/>
                    </div>
                    <div className='input-field col s12'>
                      <input onChange={props.getRefConfirmPassword} className='validate' type='password' name='confirmPassword' id='password' />
                      <label htmlFor='password'>Confirm password</label>
                      <br/>
                    </div>
                  </div>
                  <center>
                    <div className='row'>
                      <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect teal lighten-2'>NEXT</button>
                      <br/>
                      <p style={{fontSize: '12px'}} className='grey-text'>{props.message}</p>
                    </div>
                  </center>
                </form>
              </div>

            </div>
            <a href="#/">Back to login</a>
          </center>

          <div className="section"></div>
          <div className="section"></div>
        </main>
    </div>
    );

};

export default SignUpPresentational;

/*
              <div className="step-one">
              <span>STEP ONE: </span>
                <a href="/auth/facebook" id="oauth download-button" className="btn-large waves-effect waves-light blue lighten-1">Login with Facebook</a>
              </div>

                <div className="step-two">
                <span>STEP TWO:</span>
                <form id='loginform' onSubmit={props.handleSubmit} className="col s12">
                  <div className='row'>
                    <div className='col s12'>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='input-field col s12'>
                      <input onChange={props.getRefUsername} className='validate' type='text' name='text' id='text' />
                      <label htmlFor='text'>Create a username</label>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='input-field col s12'>
                      <input onChange={props.getRefPassword} className='validate' type='password' name='password' id='password' />
                      <label htmlFor='password'>Create a password</label>
                      <br/>
                    </div>
                    <div className='input-field col s12'>
                      <input onChange={props.getRefConfirmPassword} className='validate' type='password' name='confirmPassword' id='password' />
                      <label htmlFor='password'>Confirm password</label>
                      <br/>
                    </div>
                  </div>
                  <center>
                    <div className='row'>
                      <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect teal lighten-2'>SIGNUP</button>
                      <br/>
                      <p style={{fontSize: '12px'}} className='grey-text'>{props.message}</p>
                    </div>
                  </center>
                </form>
                </div>
*/

