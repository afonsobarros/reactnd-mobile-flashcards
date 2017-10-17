import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'


export default class App extends React.Component {
  render() {
    return (
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
        </View>
      </Provider>
    );
  }
}
