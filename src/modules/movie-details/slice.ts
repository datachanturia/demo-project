import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Movie} from '../../types';
import {deepClone} from '../../utils';

interface UserState {
  movie?: Movie;
}

const initialState: UserState = {
  movie: undefined,
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<Movie>) => {
      state.movie = deepClone(action.payload);
    },
  },
});

export const {setMovie} = slice.actions;
export default slice.reducer;
