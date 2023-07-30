import React from 'react';
import {Image, StyleSheet, View, ViewStyle, Dimensions} from 'react-native';
import {theme} from 'theme';
import {Watermark} from 'assets/Watermark';

interface Props {
  children?: React.ReactNode;
  containerStyle?: ViewStyle;
}

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const ContainerWithHeader = ({children, containerStyle}: Props) => (
  <View style={[styles.container, containerStyle]}>
    <View style={styles.header}>
      <Watermark style={{position: 'absolute'}} />
      <Image
        testID="avatar"
        source={require('../assets/avatar.png')}
        resizeMode="contain"
        style={styles.avatar}
      />
      <Image
        testID="logo"
        source={require('../assets/logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <Image
        testID="bell"
        source={require('../assets/bell.png')}
        resizeMode="contain"
        style={styles.bell}
      />
    </View>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: theme.spacing.screenHorizontalPadding,
    alignItems: 'center',
    backgroundColor: theme.colors.base.white,
    gap: theme.spacing.lg,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary.regular,
    width: WIDTH,
    height: HEIGHT * 0.14,
    paddingHorizontal: theme.spacing.screenHorizontalPadding,
  },
  avatar: {
    width: 32,
    height: 32,
  },
  logo: {
    width: WIDTH * 0.27,
    height: 32,
  },
  bell: {
    width: 32,
    height: 32,
  },
});
