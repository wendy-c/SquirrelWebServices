import React, { PropTypes } from 'react';
import UserInboxPresentational from './UserInboxPresentational';
import ArticleInfoWindowContainer from '../articleInfoWindow/articleInfoWindowContainer';


class UserInboxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // sortedUserArticles: []
    };
  }

  render() {
    var mappedArticles = [];
    for (var i = this.props.articles.length - 1; i > -1; i--){
      mappedArticles.push(<ArticleInfoWindowContainer key={i} url={this.props.articles[i].url} createdAt={this.props.articles[i].createdAt}/>);
    }
    // var mappedArticles = this.props.articles.map((item, idx) => {
    //   return (<ArticleInfoWindowContainer key={idx} url={item.url} createdAt={item.createdAt}/>);
    // });
    return (
    <UserInboxPresentational >
      {mappedArticles}
    </UserInboxPresentational>
    );
  }
}

function mapStateToProps(state) {
  return {
    
  }
}

export default UserInboxContainer;
