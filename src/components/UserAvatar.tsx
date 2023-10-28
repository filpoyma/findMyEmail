import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from './Icon';

const UserAvatar = ({title}: {title: string}) => {
  return (
    <View style={styles.container}>
      <View>
        <Icon name={'emptyUser'} size={118} />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: '#333',
    fontFamily: 'Roboto',
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 32,
    marginTop: 8,
  },
});

export default UserAvatar;
