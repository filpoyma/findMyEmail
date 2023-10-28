import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {RootStackParamList} from '../navigation/Navigator';

import Icon from './Icon';
import Button from './Button';
import {Screens} from '../navigation/screens';

export type GetPasswordFormInfoStack = NativeStackNavigationProp<
  RootStackParamList,
  Screens.sendPassword
>;

const GetPasswordForm = () => {
  const [fpsrNumber, onChangeFpsrNumber] = React.useState('');
  const navigation = useNavigation<GetPasswordFormInfoStack>();

  const onSubmitHandler = () => {
    navigation.navigate(Screens.sendPassword, {
      fpsr: fpsrNumber,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>FPSR ID (5 последних цифр)</Text>
        <Icon name={'exclamation'} size={20} />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeFpsrNumber}
          value={fpsrNumber}
          placeholder="Введите ваш FPSR ID (5 последних цифр)"
          keyboardType="numeric"
        />
        <Button
          title={'Получить пароль'}
          onPress={onSubmitHandler}
          style={{marginTop: 24}}
          // disabled={!fpsrNumber}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  title: {
    flexDirection: 'row',
  },
  titleText: {
    color: '#333',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    marginRight: 6,
  },
  input: {
    height: 56,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
    marginTop: 4,
  },
});

export default GetPasswordForm;