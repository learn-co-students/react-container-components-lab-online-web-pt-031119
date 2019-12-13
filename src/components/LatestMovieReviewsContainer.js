import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'KgGs5o42Claf3UtYgRncJHHL7t5d1q9v';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviews extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
            .then(resp => resp.json())
            .then(movieData => this.setState({reviews: movieData.results}))
            .catch(error => console.log(error))
    }

    render() {
        return <div className='latest-movie-reviews'><MovieReviews reviews={this.state.reviews} /></div>
    }
}

export default LatestMovieReviews