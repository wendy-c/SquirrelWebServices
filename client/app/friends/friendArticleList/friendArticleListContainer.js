import React, { PropTypes } from 'react';
import FriendArticleListPresentational from './friendArticleListPresentational';
import ArticleInfoWindowContainer from '../../home/articleInfoWindow/articleInfoWindowContainer';
import axios from 'axios';

class FriendArticleListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendArticles: [],
      owned: []
    };
    this.getFriendArticles = this.getFriendArticles.bind(this);
  }

  componentWillMount() {
    // this.getFriendArticles();
  }

  getFriendArticles() {
    console.log('i am in FriendArticleListContainer>>>> what is fbid', this.prop.friend);
    axios.get('http://wwww.localhost:8888/links/' + this.props.friend.fbid)
      .then((links) => {
        const friendLinks = this.state.friendArticles;
        friendLinks.push(links.data);
        this.setState({
          friendArticles: friendLinks
        });
      })
      // .then((res) => {
      //   this.sortFriendArticles();
      // })
      .catch((err) => {
        console.log('There is an error in FriendArticleListContainer, it\'s a sad day D=');
      });
  }

  sortFriendArticles() {
    //only show articles your friend saved, filter out articles articles from your friend's friend
    this.state.friendArticles.filter(item => {
      if (item.assignee === item.owner) {
        const temp = this.state.owned;
        temp.push(item);
        this.setState({
          owned: owned
        });
      }
      
    });
  }

  render() {
    console.log('i am in FriendArticleListContainer>>>>>', this.props);
    const articles = [];
    // const articles = this.state.owned.map((article, idx) => {
    //   return (<ArticleInfoWindowContainer key={idx}/>);
    // });
    for(var i = 0; i < 10; i ++){
      articles.push(<ArticleInfoWindowContainer key={i}/>)
    }
    return (
      <FriendArticleListPresentational>
        {articles}
      </FriendArticleListPresentational>
      );
  }
}

export default FriendArticleListContainer;