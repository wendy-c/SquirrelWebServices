import React, { PropTypes } from 'react'
import FriendArticleListPresentational from './friendArticleListPresentational'
import ArticleInfoWindowContainer from '../../home/articleInfoWindow/articleInfoWindowContainer';

class FriendArticleListContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }


  render() {
    const articles = [];
    for(var i = 0; i < 10; i ++){
      articles.push(<ArticleInfoWindowContainer key={i}/>)
    }
    return (
      <FriendArticleListPresentational>
        {articles}
      </FriendArticleListPresentational>
      )
  }
}

export default FriendArticleListContainer