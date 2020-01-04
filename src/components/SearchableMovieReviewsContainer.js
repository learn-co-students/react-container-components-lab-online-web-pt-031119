import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    
    state = {
        reviews: [],
        searchTerm: ""
    }
    
    handleChange = event => {
        event.persist()
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.fetchSearch()
    }

    fetchSearch = () => {
        const searchURL = URL + `&query=${this.state.searchTerm}`
        fetch(searchURL)
        .then(response => response.json())
        .then(json => this.setState({ reviews: json.results}))
         }
    

    render() {
        return (
            <div>
             <form onSubmit={this.handleSubmit}>
            <input type="text" id="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
            <input type="submit"/>
            </form>  
            <div className='searchable-movie-reviews'>
                <h3>The Searchable Movie Reviews</h3>
                <MovieReviews  reviews={this.state.reviews} />
            </div>





            </div>
        )
    }
}
