import React from 'react';

import {Navigator} from './navigation/Navigator';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {OverlayContext} from './reactContext';
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
  const {isOverlayShown, closeOverlay} = overlayContext;
  return (
    <NavigationContainer theme={navTheme}>
      <OverlayContext.Provider value={overlayContext}>
        <View style={styles.container}>
          <OverlayDim
            isOverlayShown={isOverlayShown}
            setShowOverlay={closeOverlay}
          />
          <Navigator />
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
