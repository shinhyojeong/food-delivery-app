import React, {useState} from 'react';
import {
  TextInputProps,
  StyleSheet,
  TextInput as NativeTextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';

export const TextInput = ({onFocus, onBlur, ...props}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);

    onFocus?.(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);

    onBlur?.(e);
  };

  return (
    <NativeTextInput
      style={[styles.input, isFocused && styles.focused]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: 'gainsboro',
    backgroundColor: 'white',
  },
  focused: {
    borderColor: 'black',
  },
});
