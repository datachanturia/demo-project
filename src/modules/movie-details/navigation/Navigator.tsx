import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes';
import { MovieDetailsNavigatorStackParamList, MovieDetailsNavigatorStackProps } from '../../../types/navigation';
import * as Screens from '../screens';

const Stack = createNativeStackNavigator<MovieDetailsNavigatorStackParamList>();

const Navigator = (navigatorProps: MovieDetailsNavigatorStackProps) => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.MOVIE_DETAILS}>
      {props => <Screens.MovieDetailsScreen {...props} {...navigatorProps} />}
    </Stack.Screen>
  </Stack.Navigator>
);

export default Navigator;
