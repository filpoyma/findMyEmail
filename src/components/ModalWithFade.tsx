import * as React from 'react';
import {Modal, View, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import {IModalBageProps} from './interfaces';

const ModalWithFade: React.FC<IModalBageProps> = ({
  isModalOpen,
  hideModal,
  children,
}) => {
  return (
    <>
      <Modal visible={isModalOpen} transparent={true} animationType={'fade'}>
        <TouchableWithoutFeedback onPress={hideModal}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainerStyle}>{children}</View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalOverlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default ModalWithFade;
