// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import rtkStore from './reduxToolkit/store';

import HomeScreen from './screens/home';
const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};
export default App;
