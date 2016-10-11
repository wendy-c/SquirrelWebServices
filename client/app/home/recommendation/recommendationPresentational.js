import React from 'react';

const RecommendationPresentational = (props) => {
  const image = props.image || 'http://i2.cdn.turner.com/cnnnext/dam/assets/150506151438-road-trip-10-grand-canyon-exlarge-169.jpg./styles/img/flying-squirrel-grey.png';
  const divStyle = {
    backgroundImage: 'url(http://i2.cdn.turner.com/cnnnext/dam/assets/150506151438-road-trip-10-grand-canyon-exlarge-169.jpg)',
  };

  return (
    <div className="recbox">
      <div style={divStyle} className="recboxImg"/>
      <span className="recboxTitle">Some Article Title</span>
    </div>
    );
};

export default RecommendationPresentational;