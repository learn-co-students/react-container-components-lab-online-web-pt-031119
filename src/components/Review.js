import React from 'react';

const Review = ({review}) => {


  return(
    <div className="review">
      {review.display_title}
    </div>
  )
}

export default Review;
