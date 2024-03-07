import React from 'react';
import {Button, Text} from 'react-native';
import { LayoutWrapper } from '../atoms';

interface Props {
  onMovieItemPress: () => void;
}

const HomeLayout = ({onMovieItemPress}:Props) => {
  return <LayoutWrapper>
    <Button title='Navigate' onPress={onMovieItemPress} />
  </LayoutWrapper>
};

export default HomeLayout;
