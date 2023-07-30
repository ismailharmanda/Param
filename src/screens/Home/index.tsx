import {ContainerWithHeader} from 'components/ContainerWithHeader';
import {Wallet} from 'components/Wallet';
import {TextWithIcon} from 'components/TextWithIcon';
import {Dimensions, StyleSheet, View} from 'react-native';
import {theme} from 'theme';

const WIDTH = Dimensions.get('window').width;

export const HomeScreen = () => {
  return (
    <ContainerWithHeader>
      <Wallet currency="GBP" balance={19600.75} />
      <View style={styles.infoContainer}>
        <TextWithIcon
          leftText="Hesap Numarası"
          rightText="0000000"
          icon="content-copy"
        />
        <TextWithIcon
          leftText="Sort Kod"
          rightText="04-14-21"
          icon="check-circle-outline"
        />
      </View>
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
