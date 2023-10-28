import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import Icons from '../asset/images/svg';
import {IIconProps} from './interfaces';

const IconSquare = ({
  name,
  size = 50,
  bgColor = '#FFFFFF',
  onPress,
}: IIconProps) => {
  const SelectedIcon = Icons[name];
  return (
    <Pressable onPress={onPress}>
      <View style={styles(size, bgColor).container}>
        <SelectedIcon />
      </View>
    </Pressable>
  );
};

const styles = (size: number, bgColor: string) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: size,
      height: size,
      backgroundColor: bgColor,
    },
  });

export default IconSquare;
