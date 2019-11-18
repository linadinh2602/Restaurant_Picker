import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, TouchableHighlight} from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}

export interface Restaurant {
  id: string,
  name: string,
  image: string,
  priceRange: number,
  rating: number,
  cusine: string,
}


export interface RestaurantCardProp {
  restaurant: Restaurant
}

export default class RestaurantCard extends Component<RestaurantCardProp, any> {
  render() {
    const { restaurant } = this.props;
    return (
      <Image
      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20, backgroundColor: '#232323' }}
      source={{uri: restaurant.image}} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  text: {
    position: 'absolute',
    top: 12,
    left: 12,
    right: 0,
    bottom: 0,
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