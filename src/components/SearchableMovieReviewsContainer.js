import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {


  constructor(props){
    super(props);

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    this.onSearchMovieReviews();
    console.log(this.state)
  }

  onSearchMovieReviews = () => {

    fetch(URL)
    .then(response => response.json())
    .then(searchData => this.setState({ reviews: searchData.results })
    ).catch(error => console.log(error))
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   debugger
  //   fetch(URL.concat(this.state.searchTerm))
  //   .then(response => response.json())
  //   .then(searchData => this.setState({ reviews: searchData.results })
  //   ).catch(error => console.log(error))
  // }
  //
  // type = (e) => {
  //   this.setState({
  //     searchTerm: e.target.value
  //   })
  // }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} className='search-form'>
          <input type="text" onChange={this.type}>

          </input>

          <button type="submit" className="submit">
          </button>
        </form>

        <div>
          <MovieReviews reviews={this.state.reviews} />

        </div>
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer;



// <div className="searchable-movie-reviews">
//    // {this.state.reviews.map(review => {review.display_title})}
// </div>
