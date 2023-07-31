import React from 'react';
import {StyleSheet, ViewStyle, View} from 'react-native';
import {Arrow} from 'assets/Arrow';
import {Wallet} from 'assets/Wallet';
import {World} from 'assets/World';

interface Props {
  type: string;
  style?: ViewStyle;
}

export const TransactionIcon = ({type, style}: Props) => {
  let iconComponent;

  if (type === 'Para Yükle') {
    iconComponent = <World style={style} />;
  } else if (type === 'Uluslararası') {
    iconComponent = <Arrow style={style} />;
  } else if (type === 'Yerel') {
    iconComponent = <Wallet style={style} />;
  }

  return <View style={styles.container}>{iconComponent}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F2F9',
    borderRadius: 6,
  },
});
