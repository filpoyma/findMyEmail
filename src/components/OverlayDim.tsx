import {
  Animated,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {IOverlayDimProps} from './interfaces';

const OverlayDim: React.FC<IOverlayDimProps> = ({
  isOverlayShown,
  setShowOverlay,
}) => {
  const windowDimensions = useWindowDimensions();
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <>
      {isOverlayShown ? (
        <Pressable
          onPress={setShowOverlay}
          style={[
            styles.overlay,
            {height: windowDimensions.height, width: windowDimensions.width},
          ]}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
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

export default OverlayDim;
