import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import { decodeHTMLEntities } from '../../../utils';

const Text = (props: TextProps) => {
  const children = typeof props.children === 'string' ? decodeHTMLEntities(props.children) : props.children;

  return <RNText {...props} children={children} />;
};

export default Text;
