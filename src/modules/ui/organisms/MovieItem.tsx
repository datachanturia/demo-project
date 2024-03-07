import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import { MovieListItem } from '../../../types';
import { Text } from '../atoms';

interface Props {
  item: MovieListItem;
  onPress: () => void;
}

const MovieItem = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.movieItem} onPress={onPress}>
      <Image source={{uri: item['#IMG_POSTER'] || undefined}} style={styles.image} />
      <View style={styles.itemInfo}>
        <Text numberOfLines={1} style={styles.title}>{item['#TITLE']}</Text>
        <Text style={styles.caption}>Year: {item['#YEAR']}</Text>
        <Text style={styles.caption}>Rank: {item['#RANK']}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  image: {height: 100, width: 100},
  movieItem: {
    width: '100%',
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    flexDirection: 'row',
    flex: 1,
  },
  itemInfo: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  caption: {
    fontSize: 16,
    fontWeight: '500',
  },
})

export default MovieItem;
