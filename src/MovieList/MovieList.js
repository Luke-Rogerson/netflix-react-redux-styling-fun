import React from 'react';
import Movie from '../Movie/Movie.js';
import './MovieList.css';

class MovieList extends React.Component {
  render () {
    return (
      <div>
      <h1>
      {this.props.title}
      </h1>
      <div className="movie-container">
      {
          this.props.movieList.map((movie, i) => {
            return (<Movie movie={movie} key={i}></Movie>)
          })
        }
      </div>
      </div>
    )
  }
}


export default MovieList;