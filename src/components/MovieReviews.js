import React from 'react';

const MovieReviews = props => {return <div className="review-list"> {props.reviews.map(rev => {
return <div className="review">{rev.summary_short}</div> 
})}</div>}

export default MovieReviews
