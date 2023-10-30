import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';

import IconSqare from './IconSqare';
import NotificationIcon from './NotificationIcon';

const Header: React.FC<StackHeaderProps> = ({back, navigation}) => {
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
  },
});

export default Header;
