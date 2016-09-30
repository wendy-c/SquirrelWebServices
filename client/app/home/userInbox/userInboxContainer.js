import React, { PropTypes } from 'react';
import UserInboxPresentational from './UserInboxPresentational';
import ArticleInfoWindowContainer from '../articleInfoWindow/articleInfoWindowContainer';


class UserInboxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedUserArticles: []
    };
    this.sortArticlesByCreatedAt = this.sortArticlesByCreatedAt.bind(this);
  }

  componentWillMount() {
    this.sortArticlesByCreatedAt();
  }
  
  sortArticlesByCreatedAt() {
    var sorted = this.props.articles.sort(function(a, b) {
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      return 0;

    });
    this.setState({
      sortedUserArticles: sorted
    });
    console.log('these articles are sorted>>>>>>>>', sorted);
  }

  render() {
    var mappedArticles = this.props.articles.map((item, idx) => {
      return (<ArticleInfoWindowContainer key={idx} url={item.url} createdAt={item.createdAt}/>);
    });
    console.log('i am in UserInboxContainer===>>>>', this.props);
    //dummy test articles below
    // var mappedArticles = [];
    // for(var i = 0; i < 8; i++ ){
    //   mappedArticles.push(<ArticleInfoWindowContainer key={i}/>)
    // } 

    return (
    <UserInboxPresentational >
      {mappedArticles}
    </UserInboxPresentational>
    );
  }
}

export default UserInboxContainer;
