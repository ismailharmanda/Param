import React from 'react';
import {Image, StyleSheet, KeyboardAvoidingView, ViewStyle} from 'react-native';
import {theme} from 'theme';

interface Props {
  children?: React.ReactNode;
  withLogo?: boolean;
  containerStyle?: ViewStyle;
}

export const Container = ({
  children,
  withLogo = true,
  containerStyle,
}: Props) => (
  <KeyboardAvoidingView
    style={[styles.container, containerStyle]}
    behavior="padding">
    <Image
      testID="logo"
      source={require('../assets/logo.png')}
      resizeMode="contain"
      style={[styles.logo, withLogo ? null : styles.hide]}
    />
    {children}
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: theme.spacing.screenHorizontalPadding,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.tertiary.regular,
    gap: theme.spacing.lg,
  },
  brand: {
    fontSize: theme.text.size.xl.fontSize,
    color: theme.colors.primary.regular,
    fontWeight: 'bold',
  },
  logo: {
    width: '40%',
    height: '20%',
  },
  hide: {
    display: 'none',
  },
});
