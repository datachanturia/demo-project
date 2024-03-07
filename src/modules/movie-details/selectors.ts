import {RootState} from '../../store';

export const selectMovieDetails = (state: RootState) =>
  state.movieDetails.movie;
