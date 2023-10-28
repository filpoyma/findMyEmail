import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';

import IconSqare from './IconSqare';
import NotificationIcon from './NotificationIcon';

const Header = ({back, navigation}: StackHeaderProps) => {
  return (
    <View style={styles.container}>
      <IconSqare
        name={'backArrow'}
        size={44}
        onPress={back ? navigation.goBack : () => {}}
      />
      <NotificationIcon isNote={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});

export default Header;
