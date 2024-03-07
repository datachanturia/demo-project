import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { LayoutWrapper, Text } from '../atoms';
import { Movie, MoviePosterUrl } from '../../../types';
import { LoadingLayout } from '.';
import { COLORS } from '../themes';

interface Props {
  isLoading: boolean;
  movie?: Movie;
  moviePoster: MoviePosterUrl;
  onGoBack: () => void;
}

const MovieDetailsLayout = ({isLoading, movie, moviePoster, onGoBack}: Props) => {
  const actors = (movie?.short.actor.map(act => act.name) || []).join(' ');
  const rating = movie?.short.aggregateRating?.ratingValue;
  const review = movie?.short.review;

  const renderReviewItem = (name: string, body: string) => (
    <View style={styles.review}>
      {name && <Text>{name}</Text>}
      {body && <Text>{body}</Text>}
    </View>
  );
  
  const renderContent = () => (
    <View style={styles.body}>
      <Image style={styles.poster} source={{uri: moviePoster || undefined}} />
      <Text style={styles.name}>{movie?.short.name}</Text>
      <Text style={styles.caption}>Description: {movie?.short.description}</Text>
      <Text style={styles.caption}>Actors: {actors};</Text>
      {rating && <Text style={styles.caption}>Rating: {rating} / 10</Text>}
      <Text style={styles.caption}>Total Reviews: {movie?.top.reviews.total}</Text>
      {review && renderReviewItem(review?.name || '', review?.body || '')}
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
    <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
      <Text style={styles.backButtonText}>Go Back</Text>
    </TouchableOpacity>
    <Text numberOfLines={1} style={styles.title}>{movie?.short.name}</Text>
    <View style={styles.right} />
  </View>
  )

  return (
    <LayoutWrapper isScrollable>
      {renderHeader()}
      {isLoading ? <LoadingLayout /> : movie && renderContent()}
    </LayoutWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 52,
    alignItems: 'center',
    paddingRight: 16,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  backButton: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 16,
    flex: 1,
  },
  backButtonText: {
    color: COLORS.blue,
  },
  title: {
    textAlign: 'center',
    flex: 3,
    fontSize: 24,
    fontWeight: '700',
  },
  right: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  poster: {
    alignSelf: 'center',
    height: 300,
    width: 300,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
  },
  caption: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  review: {
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
  }
})

export default MovieDetailsLayout;
