import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'hTz3BaLWw6pRLXpkXA3Xuw1WFZyT23cA';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?`+`&api-key=${NYT_API_KEY}`;


class LatestMovieReviewsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(json => {
      this.setState({
        reviews: json.results
      })
    })
  }  

  render(){
    const movieList = this.state.reviews.map(movie => {
      return(<MovieReviews review={movie}/>)
    })

    return(
      <div className='latest-movie-reviews'>
        <div>
          {movieList}
        </div>
      </div>
    )
  }

}

export default LatestMovieReviewsContainer