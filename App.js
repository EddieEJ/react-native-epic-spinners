/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CirclesToRhombusesSpinner } from './src/components/CirclesToRhombusesSpinner';

const App: () => React$Node = () => {
  const style = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }
  });
  return (
    <View style={style.container}>
      <CirclesToRhombusesSpinner />
    </View>
  );
};

export default App;
