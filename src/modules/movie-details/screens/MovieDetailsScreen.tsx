import React, { useEffect } from 'react';
import { MovieDetailsLayout } from '../../ui';
import { useLazyGetMovieQuery } from '../../api';
import { alertError } from '../../../services';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectMovieId, selectMoviePoster } from '../selectors';

const MovieDetailsScreen = () => {
  const navigation = useNavigation();
  const movieId = useSelector(selectMovieId);
  const moviePoster = useSelector(selectMoviePoster)
  const [getMovie, {isError, isFetching, data}] = useLazyGetMovieQuery();

  useEffect(() => {
    if(isError){
      alertError('Problem Fetching Movie Details');
    }
  }, [isError])

  useEffect(() => {
    movieId && getMovie(movieId);
  }, [])

  return <MovieDetailsLayout 
    isLoading={isFetching} 
    movie={data} 
    onGoBack={navigation.goBack} 
    moviePoster={moviePoster} />;
};

export default MovieDetailsScreen;
