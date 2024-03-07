// src/features/api/apiSlice.ts
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {MovieListItem} from '../../types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://search.imdbot.workers.dev/'}),
  endpoints: builder => ({
    getMovies: builder.query<MovieListItem[], void>({
      query: () => 'movies',
    }),
  }),
});

export const {useGetMoviesQuery} = apiSlice;
