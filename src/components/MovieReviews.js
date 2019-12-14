import React from 'react'

const MovieReviews = (props) => {  
    const rendList = props.reviews.map((review, index) => {
        return (
            <div className="review" key={index}>
                <a href={review.link.url}>{review.headline}</a><br/>
            </div>
        )
    })
        return ( 
            <div className="review-list" >
                {rendList} 
            </div>           
        )               
}

export default MovieReviews
