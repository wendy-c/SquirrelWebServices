import React, { PropTypes } from 'react';
import ArticleInfoWindowPresentational from './articleInfoWindowPresentational';
import he from 'he';


class ArticleInfoWindowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img: '',
      excerpt: ''
    };
    this.getUrlInfo = this.getUrlInfo.bind(this);
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
        var parsedData = JSON.parse(data.body);
        var decodedExcerpt = he.decode(parsedData.excerpt);
        console.log('this is in getUrlInfo====>>>>>', parsedData.excerpt, decodedExcerpt);
        context.setState({
          title: parsedData.title,
          image: parsedData.lead_image_url,
          excerpt: decodedExcerpt
        });
      },
      error: function(err) {
        console.log('there is an error in ArticleInfoWindowContainer, it\'s a sad day! D=', err);
      }
    });
  }

  render() {
    console.log('i am in ArticleInfoWindowContainer this.state>>>>>>>>>>>>>>>>>>>>>', this.state);
    return (
      <ArticleInfoWindowPresentational title={this.state.title} image={this.state.image} excerpt={this.state.excerpt}/>
      );
  }
}

export default ArticleInfoWindowContainer;