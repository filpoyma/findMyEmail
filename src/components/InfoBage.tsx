import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Button from './Button';

const InfoBage = ({hideModal}: {hideModal: () => void}) => {
  return (
    <TouchableWithoutFeedback>
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
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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
});

export default InfoBage;
