import * as actions from '../actions'

describe('actions', () =>{
  it ('should create an action to create a movie list', () => {
    const movieList = [{}];
    const expectedAction = {
      type: 'INSERT_MOVIE_LIST',
      movieList
    };
    expect(actions.insertMovieList(movieList)).toEqual(expectedAction);
  });

  it ('should create an action to create a favorite movie list', () => {
    const movieList = [{}];
    const expectedAction = {
      type: 'INSERT_FAVORITE_LIST',
      movieList
    };
    expect(actions.insertFavoriteMovieList(movieList)).toEqual(expectedAction);
  });

  it ('should create an action to update a movie property in movie list', () => {
    const movieID = 100;
    const expectedAction = {
      type: 'FAVORITE_MOVIE',
      movieID,
    };
    expect(actions.favoriteMovie(movieID)).toEqual(expectedAction);
  });



})