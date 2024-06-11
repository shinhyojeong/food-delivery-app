import React from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from '../components';

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.title}>Food Delivery App</Text>
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
  title: {
    marginBottom: 36,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  input: {
    marginVertical: 4,
  },
  button: {
    marginTop: 16,
  },
});

export default LoginScreen;
