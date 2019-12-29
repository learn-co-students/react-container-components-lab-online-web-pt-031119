// Code MovieReviews Here
import React from 'react';
// import Review from './Review'

const MovieReviews = ({reviews}) => {





  return(
    <div className="review-list">
      {reviews.map(review => <li key={review.display_title}>{review.display_title}</li>)}
    </div>
  )


}

export default MovieReviews;
