import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {Text} from 'react-native';

const App = () => (
  <Provider store={store}>
    <Text>Hey</Text>
  </Provider>
);

export default App;
