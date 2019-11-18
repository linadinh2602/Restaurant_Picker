import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './constants';

/*
  reuse from facebook example: https://facebook.github.io/react-native/docs/flatlist
*/

function Item({ data, selected, onSelect }) {
  return (
    <SafeAreaView>
    <TouchableOpacity
      onPress={() => onSelect(data)}
      style={[
        styles.item,
        { backgroundColor: selected ? colors.highlightBackground : colors.background },
      ]}
    >
      <Text style={styles.name}>{data.name}</Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
}

export type ItemType = {
  id: string,
  name: string,
}

export interface MultiSelectListProps {
  data : ItemType[],
  onSelectedItemsChanged: (items: ItemType[]) => void
}

export default function MultiSelectList(props: MultiSelectListProps) {
  // react hook https://reactjs.org/docs/hooks-state.html
  const [selected, setSelected] = React.useState({});

  const onSelect = (item: ItemType) => {
    const newSelected = {...selected};
    
    if (!(item.id in selected)) {
      newSelected[item.id] = item;
    }
    else {
      delete newSelected[item.id]
    }

    setSelected(newSelected);
    props.onSelectedItemsChanged(Object.values(newSelected));
  }

  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => (
        <Item
          data={item}
          selected={item.id in selected}
          onSelect={onSelect}
        />
      )}
      keyExtractor={item => item.id}
      extraData={selected}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: colors.background,
    padding: 12,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 18,
  },
});