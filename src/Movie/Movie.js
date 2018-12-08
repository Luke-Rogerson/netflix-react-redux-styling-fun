import React from 'react';
import AddButton from '../AddButton/AddButton.js';
import './Movie.css'
import { favoriteMovie } from '../redux/actions';
import { connect } from 'react-redux';


class Movie extends React.Component {

  constructor (props) {
    super(props);
    this.imgPath = "https://image.tmdb.org/t/p/w300";
  }

  render () {

    return (<div className="container">
      <img className="movie-image" alt="Movie cover" src={this.imgPath + this.props.movie.poster_path}></img>
      <AddButton
        onButtonClick={() => this.props.favoriteMovie(this.props.movie.id)}
        added = {this.props.movie.favorited}>
      </AddButton>
    </div>)
  }
}

// Not used but expected by connect
const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  favoriteMovie: (movieID) => dispatch(favoriteMovie(movieID))
});

export default connect(mapStateToProps,mapDispatchToProps) (Movie);