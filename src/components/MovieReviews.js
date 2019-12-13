import React from 'react'

const MovieReviews = ({reviews}) => {
    if (reviews) {
        return (
            <div 
                className='review-list'>{reviews.map(review => {
                    return (
                        <div key={review.headline} className='review'>
                            <h1>{review.displayTitle}</h1>
                            <img src={review.multimedia.src} alt={review.displayTitle} />
                            <h2>{review.headline}</h2>
                            <a href={review.link.url}>{review.link.suggested_link_text}</a>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MovieReviews
