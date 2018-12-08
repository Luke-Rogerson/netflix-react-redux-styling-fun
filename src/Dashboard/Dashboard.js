import React from 'react';
import MovieList from '../MovieList/MovieList';
import NavBar from '../NavBar/NavBar';
import { connect } from 'react-redux';
import { insertMovieList } from '../redux/actions.js';
import './Dashboard.css';

const APIAddress = 'http://movied.herokuapp.com';
const boxOfficeMoviesAddress = '/discover';
class Dashboard extends React.Component {

  componentDidMount = () => {
    this.fetchMoviesFromAPI();
  }

  fetchMoviesFromAPI = () => {
    fetch(APIAddress + boxOfficeMoviesAddress)
      .then(
        response => {
          return response.json();
        })
      .then(data => {
        this.props.insertMovieList(data);
      })
  }

  renderFavorites = () => {
    if (this.props.favorites.length > 0) {
      return (<div className="dashboard">
        <MovieList movieList={this.props.favorites} title={'My List'}></MovieList>
      </div>)
    }
  }

  renderDiscovery = () => {
    if (this.props.movieList.length > 0) {
      return (<div className="dashboard">
        <MovieList movieList={this.props.movieList} title={'Discovery'}></MovieList>
      </div>)
    }
  }

  render () {
    return (
      <div>
      <NavBar></NavBar>
        <div className="content-container dashboard">
          {this.renderDiscovery()}
          {this.renderFavorites()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movieList: state.movieList,
  favorites: state.favorites
});

const mapDispatchToProps = (dispatch) => ({
  insertMovieList: (movieList) => dispatch(insertMovieList(movieList))
})

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);