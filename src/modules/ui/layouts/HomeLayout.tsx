import React from 'react';
import { FlatList, StyleSheet, Text} from 'react-native';
import { LayoutWrapper } from '../atoms';
import { MovieListItem } from '../../../types';
import { MovieItem, SearchBar } from '../organisms';

interface Props {
  movies: MovieListItem[];
  isLoading: boolean;
  onMovieItemPress: () => void;
  onSearchPress: (movieName: string) => void;
}

const HomeLayout = ({movies, isLoading, onMovieItemPress, onSearchPress}:Props) => {
  const renderHeader = () => (
    <Text style={styles.header}>DEMO PROJECT</Text>
  )

  return <LayoutWrapper containerStyle={styles.container}>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={movies}
      contentContainerStyle={styles.listContentContainer}
      ListHeaderComponent={
        <>
          {renderHeader()}
          <SearchBar isLoading={isLoading} onSearchPress={onSearchPress} />
        </>
      }
      renderItem={({item}) => <MovieItem item={item} onPress={onMovieItemPress} />} />
  </LayoutWrapper>
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  listContentContainer: {
    paddingBottom: 40,
  },
  header: {
    marginVertical: 16,
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '600',
  },
})

export default HomeLayout;
