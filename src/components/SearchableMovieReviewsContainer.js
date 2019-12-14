import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
//             + `api-key=${NYT_API_KEY}`
//             + `&query=${searchTerm}`;

class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    // componentDidMount() {
    //     this.onTermSubmit()
    // }

    onInputChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.onTermSubmit(this.state.searchTerm)
    }

    onTermSubmit = (searchTerm) => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${searchTerm}`)
            .then(response => response.json())
            .then(json => this.setState({ reviews: json.results }))
    }

    render() {
        return (
            <div className="searchable-movie-reviews ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="ui field">
                        <label>Review Search</label>
                        <input
                            type="text"
                            value={this.state.searchTerm}
                            onChange={this.onInputChange}
                        />
                        <div>
                            <MovieReviews reviews={this.state.reviews} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
