import React, { PropTypes } from 'react';
import LoginPresentational from './LoginPresentational';
import LoginTrendingPresentational from './LoginTrendingPresentational';
import axios from 'axios';
import Modal from 'react-modal';


class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: 'please enter username and password', 
      articles: [],
      modalIsOpen: false
    };

    this.getLandingArticles = this.getLandingArticles.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    console.log('what is this.state.articles in login>>>>>>', this.state.articles);
    var mappedArticles = this.state.articles.map((item, index) => {
      return (<LoginTrendingPresentational article={item} key={index} index={index} modalIsOpen={this.state.modalIsOpen}/>);
    });

    return (
      <div>

          <div onClick={this.openModal}>
            <div className="row">
              <div className="col s12 m6 parallax" className='landing-container'>
                {mappedArticles}
              </div>
            </div>
          </div>
        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} className="npm-modal-default">
          <div className="popup">
            <div className="row container">
            <p className="exit" onClick={this.closeModal}>Close</p>
              <h2 className="squirrel-header">Squirrel</h2>
              <p className="squirrel-subhead">Save, Read, Share</p>
              <LoginPresentational message={this.state.message} getRefUsername={this.getRefUsername.bind(this)} getRefPassword={this.getRefPassword.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
            </div>
          </div>
        </Modal>

      </div>
    );
  }
}

LoginContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LoginContainer;
