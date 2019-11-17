import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import MultiSelectList, { ItemType}  from './MultiSelectList';
import { colors, cusine } from './constants';

function Separator() {
  return <View style={styles.separator} />;
}

export default class Cusine extends Component<any, any> {
  items: ItemType[];
  constructor() {
    super();
    this.state = {
      selectedItems: [],
    };
    this.items = cusine
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState(selectedItems);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Choose your Cusine </Text>
        <Separator/>
        <MultiSelectList data={this.items} onSelectedItemsChanged={this.onSelectedItemsChange}/>
        <TouchableOpacity style={{ height: 80,  margin: 'auto' }}>
        <Button
            title="Next"
            onPress={() => this.props.navigation.navigate('Price')}
          />
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    backgroundColor: colors.background
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: colors.fontWeight,
    color: colors.color


  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});