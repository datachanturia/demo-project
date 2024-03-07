import React, { ReactNode } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View, ViewStyle} from 'react-native';

interface Props {
  children: ReactNode;
  contentContainerStyle?: ViewStyle;
  isScrollable?: boolean;
}

const LayoutWrapper = ({children, contentContainerStyle, isScrollable}: Props) => {
  const WrapperComponent = isScrollable ? ScrollView : View;

  return (
    <SafeAreaView style={styles.container}>
      <WrapperComponent style={[styles.contentContainer, contentContainerStyle]}>
        {children}
      </WrapperComponent>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
})

export default LayoutWrapper;
