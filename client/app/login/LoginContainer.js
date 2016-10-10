import React, { PropTypes } from 'react';
import LoginPresentational from './LoginPresentational';
import LoginTrendingPresentational from './LoginTrendingPresentational';
import axios from 'axios';
import Modal from 'react-modal';
import {bindActionCreactor} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/index';


class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   username: '',
    //   password: '',
    //   message: 'please enter username and password', 
    //   articles: [],
    //   modalIsOpen: false
    // };

    this.getLandingArticles = this.getLandingArticles.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    this.getLandingArticles();
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.props.username;
    const password = this.props.password;
    // this.username.value = '';
    // this.password.value = '';
    axios.post('http://localhost:3010/login2', {username: username, password: password})
    .then((data) => {
      // console.log(data.data, 'data.datas');
      this.props.dispatch(actions.updateUsername(username));
      this.context.router.push('/home');
    })
    .catch((err) => {
      console.log(err, 'error');
      // this.setState({message: 'Incorrect username or password'});
      var error = 'Incorrect username or password';
      this.props.dispatch(actions.updateMessage(error));
    });

    document.getElementById('loginform').reset();
  }

  getRefUsername(e) {
    // this.setState({username: e.target.value});
    this.props.dispatch(actions.updateUsername(e.target.value));
    // console.log(e.target.value);
  }

  getRefPassword(e) {
    // this.setState({password: e.target.value});
    this.props.dispatch(actions.updatePassword(e.target.value));
  }

  getLandingArticles() {
    //get most recent 20 articles from redis
    console.log('in getLandingArticles over!');
    axios.get('http://localhost:3333/getMostRecent')
      .then((res) => {
        // this.setState({
        //   articles: res.data
        // });
        this.props.dispatch(actions.updateLandingArticles(res.data));
      })
      .catch((err) => {
        console.log('There is an error getting landing page articles, it\'s a sad day! D=');
      });
  }

  openModal() {
    // this.setState({modalIsOpen: true});
    this.props.dispatch(actions.openModal());
  }

  closeModal() {
    // this.setState({modalIsOpen: false});
    this.props.dispatch(actions.closeModal());
  }

  render() {
    var mappedArticles = this.props.landingArticles.map((item, index) => {
      return (<LoginTrendingPresentational article={item} key={index} index={index}/>);
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
        <Modal isOpen={this.props.modalIsOpen} onRequestClose={this.closeModal} className="npm-modal-default">
          <div className="popup">
            <div className="row container">
            <p className="exit" onClick={this.closeModal}>Close</p>
              <h2 className="squirrel-header">Squirrel</h2>
              <p className="squirrel-subhead">Save, Read, Share</p>
              <LoginPresentational message={this.props.message} getRefUsername={this.getRefUsername.bind(this)} getRefPassword={this.getRefPassword.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
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

function mapStateToProps(state) {
  // console.log('mapStatetoProps:', state);
  return {
    username: state.login.username,
    password: state.login.password,
    message: state.login.message, 
    landingArticles: state.login.landingArticles,
    modalIsOpen: state.login.modalIsOpen
  };
}

export default connect(mapStateToProps)(LoginContainer);
