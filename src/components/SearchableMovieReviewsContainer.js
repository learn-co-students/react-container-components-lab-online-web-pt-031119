import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {


  constructor(){
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    this.onSearchMovieReviews();
  }

  onSearchMovieReviews = () => {
    fetch(URL)
    .then(response => response.json())
    .then(searchData => {
      this.setState(
        { movieReviews: searchData.results }
      )
    })
  }

  render() {
    return(
      <form onSubmit={this.onSearchMovieReviews} className='search-form'>
        <div className="searchable-movie-reviews">
          {this.state.reviews.map(review => <li>[review.display_title]</li>)}
        </div>
      </form>
    )
  }

}

export default SearchableMovieReviewsContainer;
