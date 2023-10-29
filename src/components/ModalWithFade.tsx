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
      <Modal visible={isModalOpen} transparent={true} animationType={'slide'}>
        <TouchableWithoutFeedback onPress={hideModal}>
          <View style={styles.modalContainerStyle}>{children}</View>
        </TouchableWithoutFeedback>
        {/*<View style={styles.modalOverlay} />*/}
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 2,
  },
  modalOverlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
});

export default ModalWithFade;
