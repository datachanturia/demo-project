import React from 'react';
import { FlatList, StyleSheet} from 'react-native';
import { LayoutWrapper, Text } from '../atoms';
import { MovieListItem, MoviePosterUrl } from '../../../types';
import { MovieItem, SearchBar } from '../organisms';

interface Props {
  movies: MovieListItem[];
  isLoading: boolean;
  onMovieItemPress: (movieId: string, moviePoster: MoviePosterUrl) => void;
  onSearchPress: (movieName: string) => void;
}

const HomeLayout = ({movies, isLoading, onMovieItemPress, onSearchPress}:Props) => {
  const renderHeader = () => (
    <Text style={styles.header}>DEMO PROJECT</Text>
  )

  return <LayoutWrapper contentContainerStyle={styles.container}>
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
      renderItem={({item}) => <MovieItem item={item} onPress={() => onMovieItemPress(item['#IMDB_ID'], item['#IMG_POSTER'])} />} />
  </LayoutWrapper>
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 16,
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
