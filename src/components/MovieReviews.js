// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({review}) => (
  <div className='review-list'>
    <div key={review.headline} className='review'>
      <h3>{review.byLine}</h3>
      <h4>{review.summary_short}</h4>
      <a href={review.link.url}>{review.headline}</a>
    </div>
  </div>
)

export default MovieReviews