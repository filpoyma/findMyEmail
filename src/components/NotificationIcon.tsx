import React from 'react';
import {View} from 'react-native';
import {INotificationIconProps} from './interfaces';
import IconRound from './IconRound';

const NotificationIcon: React.FC<INotificationIconProps> = ({
  isNote = false,
}) => {
  return (
    <View>
      <IconRound name={'bell'} size={60} isNote={isNote} />
    </View>
  );
};

export default NotificationIcon;
