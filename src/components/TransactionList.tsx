import {useCallback} from 'react';
import {
  FlatList,
  ViewStyle,
  Text,
  ListRenderItem,
  View,
  StyleSheet,
} from 'react-native';
import {ITransaction} from 'screens/Home/home';
import {theme} from 'theme';

interface Props {
  data: ITransaction[];
  renderItem: ListRenderItem<ITransaction>;
  ListEmptyComponent: JSX.Element;
  listStyle?: ViewStyle;
  containerStyle?: ViewStyle;
}

export const TransactionList = ({
  data,
  renderItem,
  ListEmptyComponent,
  listStyle,
  containerStyle,
}: Props) => {
  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  const ItemSeparator = useCallback(
    () => <View testID="itemSeparator" style={styles.itemSeparator} />,
    [],
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.header}>
        <Text style={styles.title}>Son Hareketler</Text>
        <Text style={styles.subTitle}>Tümü&gt;&gt;</Text>
      </View>
      <View testID="transactionListContainer" style={styles.listContainer}>
        <FlatList
          testID="flatList"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparator}
          style={listStyle}
          keyExtractor={keyExtractor}
          data={data}
          renderItem={renderItem}
          ListEmptyComponent={ListEmptyComponent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%', flexShrink: 1},
  listContainer: {
    flexShrink: 1,
    borderWidth: 1,
    borderColor: '#F5F6F9',
    borderRadius: theme.radius,
    marginVertical: theme.spacing.xs,
  },
  text: {
    fontWeight: 'bold',
    fontSize: theme.text.size.md.fontSize,
    lineHeight: theme.text.size.md.lineHeight,
    color: theme.colors.primary.regular,
    textTransform: 'uppercase',
    marginBottom: theme.spacing.md,
  },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: '#F5F6F9',
    marginHorizontal: theme.spacing.md,
  },
  hide: {
    display: 'none',
  },
  title: {
    fontSize: theme.text.size.sm.fontSize,
    lineHeight: theme.text.size.sm.lineHeight,
    color: '#3D2852',
    fontWeight: '500',
  },
  subTitle: {
    fontSize: theme.text.size.xs.fontSize,
    lineHeight: theme.text.size.xs.lineHeight,
    color: '#7D8E9F',
    fontWeight: '500',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
