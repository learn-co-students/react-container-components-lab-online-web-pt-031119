import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`
            + `&query=`

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    render() {
        return (
            <div>
                <div className='search-field'>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input 
                            type='text' 
                            name='search-term' 
                            onChange={this.handleChange}
                        />
                        <input
                            type='submit'
                            value='Search'
                        />
                    </form>
                </div>

                <div className='movie-reviews'>
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        )
    }

    handleChange = e => {
        this.setState({searchTerm: e.target.form.elements['search-term'].value})
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch(URL + this.state.searchTerm)
            .then(resp => resp.json())
            .then(movieData => this.setState({reviews: movieData.results}))
            .catch(error => console.log(error))
    }
}

export default SearchableMovieReviewsContainer
