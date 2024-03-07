import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes';
import { HomeNavigatorStackParamList } from '../../../types/navigation';
import * as Screens from '../screens';
import { MovieDetailsNavigator } from '../../movie-details';

const Stack = createNativeStackNavigator<HomeNavigatorStackParamList>();

const Navigator = () => (
  <Stack.Navigator
    initialRouteName={Routes.HOME}
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Routes.HOME} component={Screens.HomeScreen} />
    <Stack.Screen name={Routes.MOVIE_DETAILS_FLOW} component={MovieDetailsNavigator} />
  </Stack.Navigator>
);

export default Navigator;
