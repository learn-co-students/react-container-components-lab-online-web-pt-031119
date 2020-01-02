// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    
    const movieMap = props.reviews.map( (review, index) => {
    
        return(
        <div className="review" key={index}>
            <a href={review.link.url}>{review.headline}</a><br/>
        </div>     
    )})
    
   
   return (
        <div className="review-list">
           {movieMap}
        </div>
         )
    }

export default MovieReviews


