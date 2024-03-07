import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Movie, MovieListItem} from '../../types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://search.imdbot.workers.dev/'}),
  endpoints: builder => ({
    getMovies: builder.query<{description: MovieListItem[]}, string>({
      query: (name) => `?q=${name}`,
    }),
    getMovie: builder.query<Movie, string>({
      query: (movieId) => `?tt=${movieId}`,
    }),
  }),
});

export const {useLazyGetMoviesQuery, useLazyGetMovieQuery} = apiSlice;
