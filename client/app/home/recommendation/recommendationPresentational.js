import React from 'react';

const RecommendationPresentational = (props) => {
  const image = props.article.image || 'http://i2.cdn.turner.com/cnnnext/dam/assets/150506151438-road-trip-10-grand-canyon-exlarge-169.jpg./styles/img/flying-squirrel-grey.png';
  const divStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
      <div className="recbox">
        <a href={props.article.url}>
          <div style={divStyle} id="rec" className="recboxImg"/>
          <span className="recboxTitle">{props.article.title}</span>
        </a>
      </div>
    );
};

export default RecommendationPresentational;