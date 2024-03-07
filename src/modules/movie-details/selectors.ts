import {RootState} from '../../store';

export const selectMovieId = (state: RootState) =>
  state.movieDetails.movieId;

export const selectMoviePoster = (state: RootState) =>
  state.movieDetails.moviePoster;
