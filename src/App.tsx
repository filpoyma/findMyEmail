import React from 'react';

import {Navigator} from './navigation/Navigator';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <View style={styles.container}>
        <Navigator />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: 'white',
  },
});

export default App;
