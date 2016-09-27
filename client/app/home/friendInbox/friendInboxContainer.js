import React, { PropTypes } from 'react';
import FriendInboxPresentational from './FriendInboxPresentational';
import ArticleInfoWindowContainer from '../articleInfoWindow/articleInfoWindowContainer';

class FriendInboxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const articles = [];
    for(var i = 0; i < 8; i ++){
      articles.push(<ArticleInfoWindowContainer key={i}/>)
    }

    return (
    <FriendInboxPresentational>
      {articles}
    </FriendInboxPresentational>
    );
  }
}

export default FriendInboxContainer;
