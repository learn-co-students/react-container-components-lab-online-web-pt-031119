// Code MovieReviews Here
import React from 'react';
// import Review from './Review'

const MovieReviews = ({reviews}) => {





  return(
    <div className="review-list">

      {reviews && reviews.map(review => <li className="review" key={review.display_title}>{review.display_title}</li>)}
    </div>
  )


}

export default MovieReviews;
