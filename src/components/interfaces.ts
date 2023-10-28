import Badge from './Badge';
import {GestureResponderEvent, TextStyle, ViewStyle} from 'react-native';

export interface INotificationIconProps {
  isNote: boolean;
}

export interface IIconProps {
  name: string;
  size: number;
  isNote?: boolean;
  bgColor?: string;
  onPress?: () => void;
}

export interface IBadgePrpos {
  badgeSize?: number;
  bgColor?: string;
  iconSize: number;
}

export interface IButtonProps {
  onPress: (e: GestureResponderEvent) => void;
  textStyle?: TextStyle;
  style?: ViewStyle;
  title: string;
  disabled?: boolean;
}

export interface IModalBageProps {
  isModalOpen: boolean;
  hideModal: () => void;
}
