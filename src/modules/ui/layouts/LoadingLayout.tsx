import React from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';

const LoadingLayout = () => {
  return <View style={styles.container}><ActivityIndicator /></View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
  }
})

export default LoadingLayout;
