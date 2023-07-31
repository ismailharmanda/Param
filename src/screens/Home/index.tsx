import {ContainerWithHeader} from 'components/ContainerWithHeader';
import {Wallet} from 'components/Wallet';
import {TextWithIcon} from 'components/TextWithIcon';
import {Dimensions, StyleSheet, View, ActivityIndicator} from 'react-native';
import {theme} from 'theme';
import {ActionButtonsBlock} from 'components/ActionButtonsBlock';
import {TransactionList} from 'components/TransactionList';
import {Transaction} from 'components/Transaction';
import {user} from '../../constants';
import {ITransaction} from './home';

const WIDTH = Dimensions.get('window').width;

const renderTransaction = ({item}: {item: ITransaction}) => (
  <Transaction transaction={item} />
);

export const HomeScreen = () => {
  return (
    <ContainerWithHeader>
      <Wallet currency={user.balance.currency} balance={user.balance.amount} />
      <View style={styles.infoContainer}>
        <TextWithIcon
          leftText="Hesap Numarası"
          rightText={user.accountNumber}
          icon="content-copy"
        />
        <TextWithIcon
          leftText="Sort Kod"
          rightText={user.sortCode}
          icon="check-circle-outline"
        />
      </View>
      <ActionButtonsBlock
        leftText="Para Gönder"
        rightText="Para Yükle"
        leftIcon="user"
        rightIcon="credit-card"
      />
      <TransactionList
        containerStyle={{marginTop: theme.spacing.xl}}
        data={user.transactions}
        renderItem={renderTransaction}
        ListEmptyComponent={<ActivityIndicator />}
      />
    </ContainerWithHeader>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: theme.colors.primary.regular,
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: theme.spacing.screenVerticalPadding,
    gap: 10,
  },
});
