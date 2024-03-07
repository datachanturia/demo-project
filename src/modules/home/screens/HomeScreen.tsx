import React from 'react';
import { HomeLayout } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../navigation/routes';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  const movieItemPressHandler = () => {
    navigation.navigate(Routes.MOVIE_DETAILS_FLOW as never);
  }

  return <HomeLayout onMovieItemPress={movieItemPressHandler} />
};

export default HomeScreen;
