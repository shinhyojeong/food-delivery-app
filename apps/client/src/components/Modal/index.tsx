import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';

type ModalProps = {
  containerStyles?: ViewStyle;
  onClose?: () => void;
} & PropsWithChildren<unknown>;

export const Modal = ({children, containerStyles, onClose}: ModalProps) => {
  return (
    <Pressable
      style={[styles.dim, StyleSheet.absoluteFill]}
      onPress={() => onClose?.()}>
      <View style={[styles.container, containerStyles]}>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  dim: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  container: {
    position: 'absolute',
    top: 40,
    bottom: 40,
    left: 30,
    right: 30,
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});
