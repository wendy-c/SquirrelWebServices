import React, { PropTypes } from 'react';
import UserInboxPresentational from './UserInboxPresentational';
import ArticleInfoWindowContainer from '../articleInfoWindow/articleInfoWindowContainer';


class UserInboxContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   sortedUserArticles: []
    // };
  }

  render() {
    var mappedArticles = this.props.articles.map((item, idx) => {
      return (<ArticleInfoWindowContainer key={idx} url={item.url} createdAt={item.createdAt}/>);
    });
    return (
    <UserInboxPresentational >
      {mappedArticles}
    </UserInboxPresentational>
    );
  }
}

export default UserInboxContainer;
