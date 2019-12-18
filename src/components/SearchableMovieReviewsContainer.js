import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '&api-key=hTz3BaLWw6pRLXpkXA3Xuw1WFZyT23cA';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='


class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let movieList = []
    fetch(`${URL}`+`${this.state.searchTerm}`+`${NYT_API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        reviews: json.results
      })
    })
  }

  handleSearch = (event) => {
    event.preventDefault()
    this.setState({
      searchTerm: event.target.value
    })
  }
  

  render() {
    const movieList = this.state.reviews.map(movie => {
      return(<MovieReviews review={movie}/>)
    })

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleSearch}/>
          <button type='submit'>Search</button>
        </form>
        <div>
          {movieList}
        </div>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer