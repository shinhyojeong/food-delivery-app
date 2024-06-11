import React from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {Button, Logo, TextInput} from '../components';

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Logo marginVertical={36} />
      <View>
        <TextInput
          autoFocus
          style={styles.input}
          placeholder="이메일을 입력해주세요."
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호를 입력해주세요."
        />
        <Button style={styles.button}>로그인</Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 128,
    padding: 12,
    height: '100%',
  },
  input: {
    marginVertical: 4,
  },
  button: {
    marginTop: 16,
  },
});

export default LoginScreen;
