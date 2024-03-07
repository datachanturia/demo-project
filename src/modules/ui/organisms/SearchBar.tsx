import React, { useState } from 'react';
import {StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import { Button } from '../molecules';

interface Props {
  isLoading: boolean;
  onSearchPress: (searchTerm: string) => void;
  containerStyle?: ViewStyle;
}

const SearchBar = ({onSearchPress, isLoading, containerStyle}: Props) => {
  const [value, setValue] = useState('');

  return  (
    <View style={[styles.searchBar, containerStyle]}>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.searchInput}
        value={value}
        onChangeText={setValue} />
      <Button title='Search' isLoading={isLoading} onPress={() => onSearchPress(value)} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    padding: 8,
    marginRight: 8,
  },
})

export default SearchBar;
