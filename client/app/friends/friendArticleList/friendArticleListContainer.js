import React, { PropTypes } from 'react';
import FriendArticleListPresentational from './friendArticleListPresentational';
import ArticleInfoWindowContainer from '../../home/articleInfoWindow/articleInfoWindowContainer';
import axios from 'axios';

class FriendArticleListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
 
    };
  }


  render() {
    // console.log('i am in FriendArticleListContainer>>>>>', this.state);
    // const articles = [];
    const articles = this.props.friend.links.map((article, idx) => {
      if (article.assignee === article.owner) {
        return (<ArticleInfoWindowContainer url={article.url} key={idx}/>);
      }
    });
    // for(var i = 0; i < 10; i ++){
    //   articles.push(<ArticleInfoWindowContainer key={i}/>)
    // }
    return (
      <FriendArticleListPresentational friend={this.props.friend}>
        {articles}
      </FriendArticleListPresentational>
      );
  }
}

export default FriendArticleListContainer;