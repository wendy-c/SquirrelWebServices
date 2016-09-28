import React, { PropTypes } from 'react';
import ArticleInfoWindowPresentational from './articleInfoWindowPresentational';


class ArticleInfoWindowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img: '',
      excerpt: ''
    };
    this.getUrlInfo = this.getUrlInfo.bind(this);
    this.getArticleBreakDown = this.getArticleBreakDown.bind(this);
  }

  componentWillMount() {

    this.getUrlInfo(this.props.url);
  }

  getUrlInfo(url) {
    var context = this;
    $.ajax({
      method: 'POST',
      url: '/getUrlInfo',
      data: {
        url: url
      },
      success: function(data) {
        // console.log('this is in getUrlInfo====>>>>>', JSON.parse(data.body).title);
        var parsedData = JSON.parse(data.body);
        context.setState({
          title: parsedData.title,
          image: parsedData.lead_image_url,
          excerpt: parsedData.excerpt
        });
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  getArticleBreakDown() {

  }

  render() {
    return (
      <ArticleInfoWindowPresentational title={this.state.title} image={this.state.image} excerpt={this.state.excerpt}/>
      );
  }
}

export default ArticleInfoWindowContainer;