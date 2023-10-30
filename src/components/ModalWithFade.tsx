import * as React from 'react';
import {Modal, View, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import {IModalBageProps} from './interfaces';

const ModalWithFade: React.FC<IModalBageProps> = ({
  isModalOpen,
  hideModal,
  children,
}) => {
  return (
    <Modal visible={isModalOpen} transparent={true} animationType={'slide'}>
      <TouchableWithoutFeedback onPress={hideModal}>
        <View style={styles.modalContainerStyle}>{children}</View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default ModalWithFade;
