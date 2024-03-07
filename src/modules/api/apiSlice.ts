import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {MovieListItem} from '../../types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://search.imdbot.workers.dev/'}),
  endpoints: builder => ({
    searchMovies: builder.query<{description: MovieListItem[]}, string>({
      query: (name) => `?q=${name}`,
    }),
  }),
});

export const {useLazySearchMoviesQuery} = apiSlice;
