import React, { PropTypes } from 'react';
import FriendPresentational from './friendPresentational';
// import FriendListContainer from './friendList/friendListContainer';
import FriendArticleListContainer from './friendArticleList/friendArticleListContainer';
import FriendSearchBarContainer from './friendSearchBar/friendSearchBarContainer';
import FriendCardContainer from './friendList/friendCard/friendCardContainer';
import { Scrollbars } from 'react-custom-scrollbars';
import axios from 'axios';


class FriendContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      selected: '',
      friends: [],
      friendSearchResult: [],
      searchView: false
    };
    this.updateFriendArticles = this.updateFriendArticles.bind(this);
    this.updateToSearchResult = this.updateToSearchResult.bind(this);
  }

  componentWillMount() {
    var context = this;
    //get user name and id

    axios.get('/checkAuth')
      .then((user) => {
        this.setState({
          user: user.data,
        });
        console.log('who is the user in FriendContainer>>>>', user.data);
        axios.get('http://wwww.localhost:8888/friends/' + this.state.user.fbid)
          .then((friends) => {
            console.log('i am in FriendContainer get req =====>>>>>', friends);
            //friends.data = [{fbid:...,fbname:...,links:[...]}, {friend2}]
            this.setState({
              friends: friends.data
            });
          })
          .catch((err) => {
            console.log('There is an err in friendContainer, it\'s a sad day D=', err);
          });

      })
      .catch((err) => {
        console.log('There is an error in friendContainer getting user, it\'s a sad day D=', err);
      });

  }

  updateFriendArticles(friend) {
    this.setState({
      selected: friend,
      searchView: false
    });
    // console.log('switch selected friend>>>>>>> ', this.state.selected);
  }

  updateToSearchResult(result) {
    this.setState({
      friendSearchResult: result,
      searchView: true
    });
  }

  whichView() {
    if (this.state.searchView) {
      return (
        //searchView
        <div></div>
      );
    } else {
      if (this.state.selected === '') {
        return (<div></div>);
      } else {
        return (<FriendArticleListContainer friend={this.state.selected}/>);
      }
    }
  }

  render() {
    console.log('i am in friendContainer, who are my friends >>>>>>>', this.state.selected);
    return (
      <div style={{'height': '100%', 'width': '100%'}}>
      <FriendPresentational>
        <div className='friendsearchbar'>
          <FriendSearchBarContainer updateToSearchResult={this.updateToSearchResult}/>
        </div>
        <div className='friendbody row'>
          <div className='friendlist col s4 grey lighten-5'>
            <Scrollbars style={{ height: 600 }}>
            {this.state.friends.map((friend, idx) => {
              return (
                <FriendCardContainer friend={friend} key={idx} handleClick={this.updateFriendArticles} />
                );
            })}
            </Scrollbars>
          </div>
          <div className='friendarticle col s8 grey lighten-3'>
            <Scrollbars style={{ height: 600 }}>
            {this.whichView()}
            </Scrollbars>
          </div>
        </div>
      </FriendPresentational>
      </div>
      );
  }
}

export default FriendContainer;