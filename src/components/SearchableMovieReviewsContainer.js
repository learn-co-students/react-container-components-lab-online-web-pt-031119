import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: "R"
        }
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
       
    }

    handleSubmit = event => {
        event.preventDefault()
        this.fetchData(this.state.searchTerm)
    }

   

    fetchData = (term) => {
        let url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ&query=${term}`
        fetch(url)
        .then(res => res.json())
        .then(movieData => this.setState({reviews: movieData.results}))
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return(
            <div>
              <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type="text">
             </input>
            <button>Submit</button>
            </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
    


}

export default SearchableMovieReviewsContainer