import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
        reviews: [],
        searchTerm: ""
    };
  }

  handleInputChange = (e) => {
    this.setState({
        searchTerm: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()

    fetch(`${URL}&query=${this.state.searchTerm}`)
    .then(r => r.json())
    .then(reviews => {
        this.setState({
            reviews: reviews.results
        })
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleFormSubmit}>
            <label>Search Movie Reviews</label>
            <input 
                type="text"
                name="searchTerm"
                onChange={this.handleInputChange}
            />
            <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
