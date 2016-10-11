import React, { PropTypes } from 'react';
import RecommendationPresentational from './recommendationPresentational';
import axios from 'axios';

class RecommendationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log('i am in RecommendationContainer');
    var recArray = [];
    for (var i = 0; i < 20; i++) {
      recArray.push(<RecommendationPresentational />);
    }
    return (
      <div className="recContainer">
        {recArray}
      </div>
      );
  }
}

export default RecommendationContainer;
