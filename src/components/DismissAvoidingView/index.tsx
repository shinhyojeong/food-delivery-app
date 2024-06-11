import React from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {isAndroidPlatform} from '../../utils';

export type DismissAvoidingViewProps = KeyboardAvoidingViewProps;

const isAndroid = isAndroidPlatform();

export const DismissAvoidingView = ({
  children,
  ...props
}: DismissAvoidingViewProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        {...props}
        behavior={isAndroid ? 'position' : 'padding'}>
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
