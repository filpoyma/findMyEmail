import * as React from 'react';
import {
  Text,
  Modal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

import Button from './Button';
import {IModalBageProps} from './interfaces';

const ModalBage = ({isModalOpen, hideModal}: IModalBageProps) => {
  return (
    <>
      <Modal visible={isModalOpen} transparent={true} animationType={'fade'}>
        <TouchableWithoutFeedback onPress={hideModal}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainerStyle}>
          <View style={styles.modalStyle}>
            <View style={styles.rectangle} />
            <Text style={styles.titleStyle}>Обратитесь к менеджеру</Text>
            <View style={styles.line} />
            <View style={styles.content}>
              <Text style={styles.contentText}>
                Мы не смогли найти вашу почту. Для получения пароля обратитесь в
                сулжбу поддержки, мы ответим быстро!
              </Text>
              <Button
                style={styles.button}
                title="Написать в поддержку"
                onPress={hideModal}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalStyle: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  rectangle: {
    height: 4,
    backgroundColor: '#EEE',
    borderRadius: 10,
    width: 68,
  },
  line: {
    height: 1,
    backgroundColor: '#EEE',
    alignSelf: 'stretch',
  },
  content: {
    paddingTop: 16,
    width: '100%',
    paddingHorizontal: 24,
    gap: 16,
  },
  contentText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 23,
    textAlign: 'left',
  },
  button: {},
  titleStyle: {
    color: '#333',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 32,
  },
  optionTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  optionContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default ModalBage;
