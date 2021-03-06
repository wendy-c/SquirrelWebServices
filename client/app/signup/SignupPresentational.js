import React, { PropTypes } from 'react';

const SignUpPresentational = (props) => {

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
                      <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect teal lighten-2'>SIGNUP</button>
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



    //   return (
    // <div>
    //   <div>
    //     <h3 className="header">Save Articles, Read Offline, Share with Friends</h3>
    //     <img className="bk-image" src="styles/img/background-wood.png"/>
    //   </div>

    //   <div className='buttoncontainer'>
    //     <h5 className="sub-head">Get started</h5>
    //     <br />
    //     <div className="loginBody">

    //       <div className="row center">
    //         <form style={{color: 'white'}} id='loginform' onSubmit={props.handleSubmit}>
    //             Username: <input onChange={props.getRefUsername} className='form-control' type='text' placeholder='Enter username'></input>
    //             Password: <input onChange={props.getRefPassword} className='form-control' type='text' placeholder='Enter password'></input>
    //             <h6 style={{color: 'white'}}>{props.message}</h6>
    //             <button type='submit' className='btn'>Submit</button>
    //         </form>
    //       </div>
    //       <div className="row center">
    //         <button className="downloadBtn">
    //           <h5>Download</h5>
    //           <h6>Squirrel beta 1.0</h6>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // );