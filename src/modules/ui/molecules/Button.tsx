import React from 'react';
import {ActivityIndicator, Button as RNButton, StyleSheet, View, ViewStyle} from 'react-native';

interface Props {
  onPress: () => void;
  isLoading: boolean;
  containerStyle?: ViewStyle;
  title: string;
}

const Button = ({onPress, isLoading, containerStyle}: Props) => {
  return (
    <View style={[styles.conatainer, containerStyle]}>
      {
        isLoading 
          ? <ActivityIndicator /> 
          : <RNButton title='Search' onPress={onPress} />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  }
})

export default Button;
