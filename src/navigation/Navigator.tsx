import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GetPasswordScreen from '../screens/GetPasswordScreen';
import SendPasswordScreen from '../screens/SendPasswordScreen';
import {Screens} from './screens';
import Header from '../components/Header';

export type RootStackParamList = {
  [Screens.sendPassword]: {fpsr: string};
  [Screens.getPassword]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: Header,
      }}>
      <Stack.Screen name={Screens.getPassword} component={GetPasswordScreen} />
      <Stack.Screen
        name={Screens.sendPassword}
        component={SendPasswordScreen}
      />
    </Stack.Navigator>
  );
};
