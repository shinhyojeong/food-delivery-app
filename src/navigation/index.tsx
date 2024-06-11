import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';

export type RootStackParamList = {
  /** Auth */
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
