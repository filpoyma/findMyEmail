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
  closeOverlay,
}) => {
  const windowDimensions = useWindowDimensions();
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    if (isOverlayShown) {
      Animated.timing(fadeAnim, {
        toValue: 0.6,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isOverlayShown]);

  return (
    <>
      {isOverlayShown ? (
        <Animated.View
          style={[
            styles.overlay,
            {height: windowDimensions.height, width: windowDimensions.width},
            {opacity: fadeAnim},
          ]}>
          <Pressable onPress={closeOverlay} />
        </Animated.View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'black',
    flex: 1,
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
});

export default OverlayDim;
