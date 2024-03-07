// src/store.ts
import {configureStore} from '@reduxjs/toolkit';
import {homeReducer} from './modules/home';
import {movieDetailsReducer} from './modules/movie-details';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    movieDetails: movieDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
