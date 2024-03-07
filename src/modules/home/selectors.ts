import {RootState} from '../../store';

export const selectMovies = (state: RootState) => state.home.movies;
