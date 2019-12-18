// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({review}) => (
  <div className='review-list'>
    <div className='review'>
      <h3>{review.display_title}</h3>
    </div>
  </div>
)

export default MovieReviews