import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MovieListItem} from '../../types';
import {deepClone} from '../../utils';

interface UserState {
  movies: MovieListItem[];
}

const initialState: UserState = {
  movies: [],
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<MovieListItem[]>) => {
      state.movies = deepClone(action.payload);
    },
  },
});

export const {setMovies} = slice.actions;
export default slice.reducer;
