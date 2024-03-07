import React, { useEffect } from 'react';
import { HomeLayout } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../navigation/routes';
import { useLazySearchMoviesQuery } from '../../api/apiSlice';
import { alertError } from '../../../services';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchMovies, {data, isFetching, isError}] = useLazySearchMoviesQuery();

  const movies = data?.description || [];

  useEffect(() => {
    searchMovies('');
  },[])

  useEffect(() => {
    if(isError){
      alertError('List Fetch Issue');
    }
  }, [isError])
  
  const movieItemPressHandler = () => {
    navigation.navigate(Routes.MOVIE_DETAILS_FLOW as never);
  }

  return <HomeLayout
    isLoading={isFetching}
    movies={movies} 
    onMovieItemPress={movieItemPressHandler} 
    onSearchPress={searchMovies} />
};

export default HomeScreen;
