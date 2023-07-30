import React from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import {theme} from 'theme';
import {formatter} from 'utils';

interface Props {
  currency: Intl.NumberFormatOptions['currency'];
  balance: number;
}

const WIDTH = Dimensions.get('window').width;

export const Wallet = ({currency, balance}: Props) => {
  const formattedBalance = formatter('GBP').format(balance);
  return (
    <View style={styles.container}>
      <Text style={styles.currencyWrapper}>{currency} · Toplam Bakiye</Text>
      <Text style={styles.balance}>{formattedBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary.regular,
    paddingVertical: theme.spacing.screenVerticalPadding,
  },
  currencyWrapper: {
    fontFamily: theme.text.fontFamily,
    color: theme.colors.base.text,
    fontWeight: '500',
    ...theme.text.size.xxs,
  },
  balance: {
    fontFamily: theme.text.fontFamily,
    color: theme.colors.base.white,
    fontWeight: '500',
    height: 40,
    ...theme.text.size.xxl,
  },
});
