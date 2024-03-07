import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MoviePosterUrl} from '../../types';
import {deepClone} from '../../utils';

interface UserState {
  movieId?: string;
  moviePoster: MoviePosterUrl;
}

const initialState: UserState = {
  movieId: undefined,
  moviePoster: null,
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMovieId: (state, action: PayloadAction<string>) => {
      state.movieId = deepClone(action.payload);
    },
    setMoviePoster: (state, action: PayloadAction<MoviePosterUrl>) => {
      state.moviePoster = action.payload;
    },
  },
});

export const {setMovieId, setMoviePoster} = slice.actions;
export default slice.reducer;
