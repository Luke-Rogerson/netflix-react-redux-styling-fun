const movies = (initialState = { movieList: [], favorites: [] }, action) => {
  switch (action.type) {

    case 'INSERT_MOVIE_LIST':
      return Object.assign({}, initialState, { movieList: action.movieList });

    case 'INSERT_FAVORITE_LIST':
      return console.log(Object.assign({}, initialState, { favorites: action.movieList }));

    case 'FAVORITE_MOVIE':
      const newState = {...initialState}
      newState.movieList = newState.movieList.map(movie =>
        ({
          ...movie,
          favorited: (movie.id === action.movieID) ? !movie.favorited : movie.favorited
        }))
      newState.favorites = newState.movieList.filter(movie =>
        movie.favorited);
      return newState;

    default:
      return initialState;
  }
}


export default movies;