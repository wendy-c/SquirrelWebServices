import React from 'react';

class SignupWithFacebookPresentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validateDone: false
    };
  }

  // componentWillMount() {
  //   if (props.confirmView || !this.state.validateDone) {
  //     props.validateFacebook();
  //     this.setState({validateDone: true});
  //   }
  // }

  render() {

    return (
        <div className="signupbox">
          <main>
            <center>
              <div className="z-depth-1 grey lighten-4 row" style={{display: 'inline-block', padding: '32px 48px 0px 48px', border: '1px solid #EEE'}}>
                <div className="step-one">
                  <span className="signup-text"> Add your facebook avatar </span>
                  <a href="/auth/facebook" id="oauth download-button" className="btn-large waves-effect waves-light blue lighten-1">Login with Facebook</a>
                </div> 
              </div>
            </center>
          </main>
        </div>
      );
  }
};

export default SignupWithFacebookPresentational;