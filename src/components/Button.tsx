import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {IButtonProps} from './interfaces';

const Button: React.FC<IButtonProps> = ({
  onPress,
  title = 'Button',
  style = {},
  textStyle = {},
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[disabled ? styles.disabledButton : styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1677FF',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 56,
  },
  disabledButton: {
    backgroundColor: '#d3d3d3',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 56,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
