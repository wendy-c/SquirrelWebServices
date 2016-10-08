import React, { PropTypes } from 'react';
import LoginPresentational from './LoginPresentational';
import LoginTrendingPresentational from './LoginTrendingPresentational';
import axios from 'axios';


class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: 'please enter username and password', 
      articles: [],
    };

    this.getLandingArticles = this.getLandingArticles.bind(this);
  }

  componentWillMount() {
    this.getLandingArticles();
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    // this.username.value = '';
    // this.password.value = '';
    axios.post('http://localhost:3010/login2', {username: username, password: password})
    .then((data) => {
      console.log(data.data, 'data.data');
      this.context.router.push('/home');
    })
    .catch((err) => {
      console.log(err, 'error');
      this.setState({message: 'Incorrect username or password'});
    });

    document.getElementById('loginform').reset();
  }

  getRefUsername(e) {
    this.setState({username: e.target.value});
    console.log(e.target.value);
  }

  getRefPassword(e) {
    this.setState({password: e.target.value});
  }

  getLandingArticles() {
    //get most recent 20 articles from redis
    console.log('in getLandingArticles over!');
    axios.get('http://localhost:3333/getMostRecent')
      .then((res) => {
        this.setState({
          articles: res.data
        });
      })
      .catch((err) => {
        console.log('There is an error getting landing page articles, it\'s a sad day! D=');
      });
  }

  render() {
    console.log('what is this.state.articles in login>>>>>>', this.state.articles);
    var mappedFirstHalf = [];
    var mappedSecondHalf = []; 
    var all = this.state.articles.map((item, index) => {
      // if (index < 10) {
      //   mappedFirstHalf.push(<LoginTrendingPresentational article={item}/>);
      // } else {
      //   mappedSecondHalf.push(<LoginTrendingPresentational article={item}/>);
      // }

      return (<LoginTrendingPresentational article={item}/>);
    });

    return (
      <div>

          <div className="parallax-container">
            <div className="row">
              <div className="col s12 m6 parallax" className='landing-container'>
                {all}
              </div>
            </div>
          </div>
        <div className="section white">
          <div className="row container">
            <h2 className="squirrel-header">Squirrel</h2>
            <p className="squirrel-subhead">Save, Read, Share</p>
            <LoginPresentational message={this.state.message} getRefUsername={this.getRefUsername.bind(this)} getRefPassword={this.getRefPassword.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
          </div>
        </div>
          <div className="parallax-container">
            <div className="row">
              <div className="col s12 m6 parallax" className='landing-container'>
                {all}
              </div>
            </div>
          </div>
      </div>
    );
  }
}

LoginContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LoginContainer;
