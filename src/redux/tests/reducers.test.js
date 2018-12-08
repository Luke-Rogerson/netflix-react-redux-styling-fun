import reducers from '../reducers'

// Constants used for testing
const initalState = {
  movieList: [],
  favorites: []
};

const movieId = 100;
const favorited = false;

const testMovieList = [{
  title: 'TestMovie',
  movieId,
  favorited
}];

const testMovieList2 = testMovieList.concat(testMovieList);

const testState = {
  movieList: testMovieList,
  favorites: []
}
const testState2 = {
  movieList:
    [{
      title: 'TestMovie',
      movieId,
      favorited: true
    }],
  favorites: [{
    title: 'TestMovie',
    movieId,
    favorited: true
  }],
}

//---------------------------//
// Tests //


describe('movie list reducer', () => {
  it('should return initial state', () => {
    expect(
      reducers(undefined, {})
    ).toEqual(initalState);
  });

  it('should handle INSERT_MOVIE_LIST', () => {
    expect(
      reducers(initalState, {
        type: 'INSERT_MOVIE_LIST',
        movieList: testMovieList
      }))
      .toEqual(
        { movieList: testMovieList, favorites: [] }
      );

    expect(
      reducers({ movieList: testMovieList, favorites: testMovieList }, {
        type: 'INSERT_MOVIE_LIST',
        movieList: testMovieList2
      }))
      .toEqual(
        { movieList: testMovieList2, favorites: testMovieList }
      );
  });

  it('should handle INSERT_FAVORITE_LIST', () => {
    expect(
      reducers(initalState, {
        type: 'INSERT_FAVORITE_LIST',
        movieList: testMovieList
      }))
      .toEqual(
        { movieList: [], favorites: testMovieList });

    expect(
      reducers({ movieList: testMovieList, favorites: testMovieList }, {
        type: 'INSERT_FAVORITE_LIST',
        movieList: testMovieList2
      }))
      .toEqual(
        { movieList: testMovieList, favorites: testMovieList2 }
      );
  });

  it('should handle FAVORITE_MOVIE false -> true', () => {
    expect(
      reducers(testState,
        {
          type: 'FAVORITE_MOVIE',
          movieId
        }))
      .toEqual(
        {
          movieList: [{
            title: 'TestMovie',
            movieId,
            favorited: true
          }],
          favorites: [{
            title: 'TestMovie',
            movieId,
            favorited: true
          }]
        });
  });

  it('should handle FAVORITE_MOVIE true -> false', () => {
    expect(
      reducers({
        movieList: [{
          title: 'TestMovie',
          movieId,
          favorited: true
        }],
        favorites: [{
          title: 'TestMovie',
          movieId,
          favorited: true
        }]
      },
        {
          type: 'FAVORITE_MOVIE',
          movieId
        }))
      .toEqual(
        {
          movieList: testMovieList,
          favorites: []
        });
  });
});


