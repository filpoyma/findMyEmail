import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {Screens} from '../navigation/screens';
import {RootStackParamList} from '../navigation/Navigator';
import UserAvatar from '../components/UserAvatar';
import Button from '../components/Button';
import ModalWithFade from '../components/ModalWithFade';
import InfoBage from '../components/InfoBage';
import {OverlayContext} from '../reactContext';

export type SendPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.sendPassword
>;

const SendPasswordScreen: React.FC<SendPasswordScreenProps> = ({route}) => {
  const {fpsr} = route.params;
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const {openOverlay, closeOverlay} = React.useContext(OverlayContext);
  const showModal = () => {
    openOverlay();
    setIsModalOpen(true);
  };
  const hideModal = () => {
    setIsModalOpen(false);
    closeOverlay();
  };

  return (
    <View style={styles.container}>
      <UserAvatar title={'Личный кабинет'} />
      <View style={styles.title}>
        <Text style={styles.infoTitle}>
          {' '}
          На емейл <Text style={styles.emailText}>fd***d@mail.com</Text> будет
          отправлен пароль для входа, после авторизации вы сможете его изменить.
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          title={'Отправить пароль'}
          onPress={() => {
            Alert.alert(`FPRS is ${fpsr ? fpsr : 'empty'}`);
          }}
        />
        <Button
          style={styles.rejectEmail}
          textStyle={styles.textRejectEmail}
          title={'Это не моя почта'}
          onPress={showModal}
        />

        <ModalWithFade isModalOpen={isModalOpen} hideModal={hideModal}>
          <InfoBage hideModal={hideModal} />
        </ModalWithFade>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 37,
  },
  emailText: {color: '#1677FF'},
  infoTitle: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 23,
    textAlign: 'center',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 31,
  },
  rejectEmail: {
    borderColor: '#EEE',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#FFFFFF',
  },
  textRejectEmail: {
    color: '#000000',
  },
});

export default SendPasswordScreen;
