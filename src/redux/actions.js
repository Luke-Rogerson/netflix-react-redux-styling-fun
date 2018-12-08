export const insertMovieList = (movieList) => ({
  type: 'INSERT_MOVIE_LIST',
  movieList
});

export const insertFavoriteMovieList = (movieList) => ({
  type: 'INSERT_FAVORITE_LIST',
  movieList
});

export const favoriteMovie = (movieID) => ({
  type: 'FAVORITE_MOVIE',
  movieID
});
