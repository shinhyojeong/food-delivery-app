import React from 'react';
import {FlexStyle, StyleSheet, Text} from 'react-native';

export type LogoProps = {
  size?: number;
} & Pick<FlexStyle, 'marginHorizontal' | 'marginVertical'>;

export const Logo = ({size = 24, ...props}: LogoProps) => {
  return (
    <Text
      style={[
        styles.logo,
        {
          fontSize: size,
          ...props,
        },
      ]}>
      Food Delivery App
    </Text>
  );
};

const styles = StyleSheet.create({
  logo: {fontWeight: '700', textAlign: 'center'},
});
