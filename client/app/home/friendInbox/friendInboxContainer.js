import React, { PropTypes } from 'react';
import FriendInboxPresentational from './FriendInboxPresentational';
import ArticleInfoWindowContainer from '../articleInfoWindow/articleInfoWindowContainer';

class FriendInboxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  //getting this.props.articles



  render() {
    const mappedArticles = this.props.articles.map((item, idx) => {
      return (<ArticleInfoWindowContainer key={idx} url={item.url} createdAt={item.createdAt} assignee={item.assignee}/>);
    });

    return (
    <FriendInboxPresentational>
      {mappedArticles}
    </FriendInboxPresentational>
    );
  }
}

export default FriendInboxContainer;
