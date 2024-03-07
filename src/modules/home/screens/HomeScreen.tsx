import React, { useEffect } from 'react';
import { HomeLayout } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../navigation/routes';
import { useLazyGetMoviesQuery } from '../../api';
import { alertError } from '../../../services';
import { setMovieId, setMoviePoster } from '../../movie-details';
import { useDispatch } from 'react-redux';
import { MoviePosterUrl } from '../../../types';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [getMovies, {data, isFetching, isError}] = useLazyGetMoviesQuery();

  const movies = data?.description || [];

  useEffect(() => {
    getMovies('');
  }, [])

  useEffect(() => {
    if(isError){
      alertError('List Fetch Issue');
    }
  }, [isError])
  
  const movieItemPressHandler = (movieId: string, moviePoster: MoviePosterUrl) => {
    dispatch(setMovieId(movieId));
    dispatch(setMoviePoster(moviePoster))
    navigation.navigate(Routes.MOVIE_DETAILS_FLOW as never);
  }

  return <HomeLayout
    isLoading={isFetching}
    movies={movies} 
    onMovieItemPress={movieItemPressHandler} 
    onSearchPress={getMovies} />
};

export default HomeScreen;
