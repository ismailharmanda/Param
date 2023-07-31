import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {formatter} from 'utils';
import {theme} from 'theme';

interface Props {
  amount: number;
  currency: string;
}

export const TransactionAmount = ({amount, currency}: Props) => {
  return amount < 0 ? (
    <Text style={[styles.text]}>
      - {formatter(currency).format(Math.abs(amount))}
    </Text>
  ) : (
    <Text style={[styles.text, styles.green]}>
      + {formatter(currency).format(amount)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: theme.text.size.sm.fontSize,
    lineHeight: theme.text.size.sm.lineHeight,
    color: theme.colors.base.dark,
    textAlign: 'right',
  },
  green: {
    color: '#4E6C35',
  },
});
