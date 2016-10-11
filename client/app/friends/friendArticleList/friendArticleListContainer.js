import React, { PropTypes } from 'react';
import FriendArticleListPresentational from './friendArticleListPresentational';
import ArticleInfoWindowContainer from '../../home/articleInfoWindow/articleInfoWindowContainer';
import axios from 'axios';

class FriendArticleListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }

  componentWillMount() {
    var friendId = this.props.friend.fbid;
    console.log('am i getting friend fbid', friendId);
    axios.get('/links/friends/' + friendId)
      .then((res) => {
        console.log('what is res in FriendArticleListContainer', res)
        this.setState({
          links: res.data
        }, function() {
          console.log('done setting state');
        });
      })
      .catch((err) => {
        console.log('There is an error in FriendArticleListContainer, it\'s a sad day! D=');
      });
  }

  componentWillReceiveProps(nextProps) {
    //get selected friend's links
    console.log('FriendArticleListContainer', this.props.friend.links);
    var friendId = this.props.friend.fbid;
    console.log('am i getting friend fbid', friendId);
    axios.get('/links/friends/' + friendId)
      .then((res) => {
        console.log('what is res in FriendArticleListContainer', res);
        this.setState({
          links: res.data
        }, function() {
          console.log('done setting state');
        });
      })
      .catch((err) => {
        console.log('There is an error in FriendArticleListContainer, it\'s a sad day! D=');
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    //fix this later
    return true;
  }

  render() {
    console.log('i am in FriendArticleListContainer>>>>>', this.state);
    // const articles = [];
    const articles = this.state.links.map((article, idx) => {
      if (article.assignee === article.owner) {
        return (<ArticleInfoWindowContainer url={article.url} key={idx}/>);
      }
    });
    return (
      <FriendArticleListPresentational friend={this.props.friend}>
        {articles}
      </FriendArticleListPresentational>
      );
  }
}

export default FriendArticleListContainer;