import React, { ReactNode } from 'react';
import {SafeAreaView, Text} from 'react-native';

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({children}: Props) => {
  return <SafeAreaView>{children}</SafeAreaView>
};

export default LayoutWrapper;
