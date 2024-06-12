import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native';

export type ButtonProps = {} & TouchableOpacityProps;

export const Button = ({children, style, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    width: '100%',
    padding: 18,
    backgroundColor: 'tomato',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
  },
});
