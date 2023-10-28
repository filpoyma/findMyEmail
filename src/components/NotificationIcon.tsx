import React from 'react';
import {View} from 'react-native';
import {INotificationIconProps} from './interfaces';
import Icon from './Icon';

const NotificationIcon: React.FC<INotificationIconProps> = ({
  isNote = false,
}) => {
  return (
    <View>
      <Icon name={'bell'} size={60} isNote={isNote} />
    </View>
  );
};

export default NotificationIcon;
