import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes';
import { MovieDetailsNavigatorStackParamList } from '../../../types/navigation';
import * as Screens from '../screens';

const Stack = createNativeStackNavigator<MovieDetailsNavigatorStackParamList>();

const Navigator = () => (
  <Stack.Navigator
    initialRouteName={Routes.MOVIE_DETAILS}
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Routes.MOVIE_DETAILS} component={Screens.MovieDetailsScreen} />
  </Stack.Navigator>
);

export default Navigator;
