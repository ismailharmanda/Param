import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {theme} from 'theme';

interface Props {
  leftText: string;
  rightText: string;
  icon: string;
}

const WIDTH = Dimensions.get('window').width;

export const TextWithIcon = ({leftText, rightText, icon}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{leftText}</Text>
      <View style={styles.rightWrapper}>
        <Text style={styles.text}>{rightText}</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name={icon}
            color={theme.colors.base.text}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH * 0.75,
    borderWidth: 1,
    borderColor: theme.colors.base.transparent,
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.base.transparent,
    borderRadius: 99,
    paddingHorizontal: theme.spacing.sm,
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
});
