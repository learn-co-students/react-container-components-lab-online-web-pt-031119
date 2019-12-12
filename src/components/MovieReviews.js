// Code MovieReviews Here
import React from 'react';
// import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'
// import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'


const Review = ({
    headline, byline, link, summary_short
}) => {
    return(
        <div 
        key={headline}
        className="review"></div>
    )
}

const MovieReviews = ({reviews}) => 
    <div className="review-list"> 
    {reviews.map(Review)}
    </div>


export default MovieReviews