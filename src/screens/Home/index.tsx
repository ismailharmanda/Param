import {ContainerWithHeader} from 'components/ContainerWithHeader';
import {Wallet} from 'components/Wallet';

export const HomeScreen = () => {
  return (
    <ContainerWithHeader>
      <Wallet currency="GBP" balance={19600.75} />
    </ContainerWithHeader>
  );
};
