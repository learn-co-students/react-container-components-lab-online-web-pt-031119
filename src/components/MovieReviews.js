// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({review}) => (
  <div className='review-list'>
    <div className='review'>
      <h2>{review.headline}</h2>
      <h3>{review.byLine}</h3>
      <h4>{review.summary_short}</h4>
      <p>{review.link.url}</p>
    </div>
  </div>
)

export default MovieReviews