import {configureStore} from '@reduxjs/toolkit';
import {movieDetailsReducer} from './modules/movie-details';
import { api } from './modules/api';

export const store = configureStore({
  reducer: {
    movieDetails: movieDetailsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
