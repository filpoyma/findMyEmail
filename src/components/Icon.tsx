import React from 'react';
import {StyleSheet, View} from 'react-native';

import Icons from '../asset/images/svg';
import Badge from './Badge';
import {IIconProps} from './interfaces';

const Icon = ({name, size = 50, isNote, bgColor = '#F6F6F6'}: IIconProps) => {
  const SelectedIcon = Icons[name];
  return (
    <View style={styles(size, bgColor).container}>
      {isNote && <Badge iconSize={size} />}
      <SelectedIcon />
    </View>
  );
};

const styles = (size: number, bgColor: string) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: size,
      height: size,
      borderRadius: size,
      backgroundColor: bgColor,
    },
  });

export default Icon;
