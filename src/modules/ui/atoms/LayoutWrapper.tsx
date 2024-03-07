import React, { ReactNode } from 'react';
import {SafeAreaView, StyleSheet, Text, View, ViewStyle} from 'react-native';

interface Props {
  children: ReactNode;
  containerStyle?: ViewStyle;
}

const LayoutWrapper = ({children, containerStyle}: Props) => {
  return (
    <SafeAreaView>
      <View style={[styles.container, containerStyle]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  }
})

export default LayoutWrapper;
