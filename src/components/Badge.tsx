import React from 'react';
import {StyleSheet, View} from 'react-native';

import {IBadgePrpos} from './interfaces';

const Badge = ({
  badgeSize = 10,
  iconSize,
  bgColor = '#FF8E75',
}: IBadgePrpos) => {
  return <View style={styles(badgeSize, iconSize, bgColor).container} />;
};

const styles = (badgeSize: number, size: number, bgColor: string) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: badgeSize,
      height: badgeSize,
      borderRadius: badgeSize,
      backgroundColor: bgColor,
      left: size - badgeSize * 1.5,
      bottom: size - badgeSize * 1.5,
    },
  });

export default Badge;
