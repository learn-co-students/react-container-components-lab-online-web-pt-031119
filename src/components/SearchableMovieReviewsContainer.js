import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// import MovieReview from './MovieReviews';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    search = (event) => {
        event.preventDefault()
        // debugger
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ&query=${this.state.searchTerm}`)
        .then(res => res.json())
        .then(json => this.setState({
            reviews: json.results,
            searchTerm: ""
        }));
    }

    setSearchTerm = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.search}>
                    <input onChange={this.setSearchTerm}></input>
                    <input type="submit"></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )}
}

export default SearchableMovieReviewsContainer