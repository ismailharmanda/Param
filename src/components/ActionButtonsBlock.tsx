import React from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from 'theme';

interface Props {
  leftText: string;
  rightText: string;
  leftIcon: string;
  rightIcon: string;
}

const WIDTH = Dimensions.get('window').width;

export const ActionButtonsBlock = ({
  leftText,
  rightText,
  leftIcon,
  rightIcon,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Feather name={leftIcon} color={theme.colors.base.text} size={24} />
        <Text style={styles.text}>{leftText}</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.iconWrapper}>
        <Feather name={rightIcon} color={theme.colors.base.text} size={24} />
        <Text style={styles.text}>{rightText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    borderTopWidth: 1,
    borderColor: theme.colors.base.transparent,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.primary.regular,
    paddingVertical: 20,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: theme.spacing.xs,
  },
  text: {
    fontFamily: theme.text.fontFamily,
    color: theme.colors.base.text,
    fontWeight: '500',
    ...theme.text.size.xs,
  },
  rightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  separator: {
    width: 1,
    height: 40,
    backgroundColor: theme.colors.base.text,
  },
});
