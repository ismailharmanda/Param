import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {theme} from 'theme';
import {ITransaction} from 'screens/Home/home';
import {formatDate} from 'utils';
import {TransactionAmount} from './TransactionAmount';
import {TransactionIcon} from './TransactionIcon';

interface Props {
  onPress?: () => void;
  transaction: ITransaction;
}

export const Transaction = ({onPress, transaction}: Props) => {
  return (
    <TouchableOpacity
      testID="transaction"
      style={styles.container}
      onPress={onPress}>
      <TransactionIcon type={transaction.description} />
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.text}>
          {transaction.name}
        </Text>
        <Text numberOfLines={1} style={styles.subText}>
          {transaction.description}
        </Text>
        <Text numberOfLines={1} style={styles.subText}>
          {formatDate(transaction.date)}
        </Text>
      </View>
      <TransactionAmount
        amount={transaction.amount}
        currency={transaction.currency}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.radius,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  text: {
    fontSize: theme.text.size.sm.fontSize,
    lineHeight: theme.text.size.sm.lineHeight,

    color: '#3D2852',
    width: '100%',
    flexWrap: 'wrap',
  },
  subText: {
    fontSize: 11,
    lineHeight: 14,
    color: '#7D8E9F',
    width: '100%',
    flexWrap: 'wrap',
  },
  amount: {
    fontSize: theme.text.size.sm.fontSize,
    lineHeight: theme.text.size.sm.lineHeight,
    color: theme.colors.base.dark,
    textAlign: 'right',
  },
  textWrapper: {flex: 1, gap: 2},
});
