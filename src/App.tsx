import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {OverlayContext} from './reactContext';
import {Navigator} from './navigation/Navigator';
import {useOverlay} from './hooks/useOverlay';
import OverlayDim from './components/OverlayDim';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App = () => {
  const overlayContext = useOverlay();
  return (
    <NavigationContainer theme={navTheme}>
      <OverlayContext.Provider value={overlayContext}>
        <View style={styles.container}>
          <OverlayDim />
          <SafeAreaView style={{flex: 1}}>
            <Navigator />
          </SafeAreaView>
        </View>
      </OverlayContext.Provider>
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
  overlay: {
    backgroundColor: 'black',
    flex: 1,
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
});

export default App;
