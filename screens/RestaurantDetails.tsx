import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image, SafeAreaView, } from 'react-native';
import Constants from 'expo-constants';
import Carousel from 'react-native-snap-carousel';
import { colors, cusine, location } from './constants';
import { singleRestaurant } from './mocks'

function Separator() {
  return <View style={styles.separator} />;
}
export default class RestaurantDetails extends Component<any, any>  {
  _carousel: any;

  _renderItem({ item, index }) {
    console.log(item)
    return (
      <View style={{ backgroundColor: '#F2F2F2', height: 240 }}>
        <Image
          style={{ flex: 1, width: 200, resizeMode: 'contain', borderRadius: 20 }}
          source={{ uri: item }}
        />
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.info}>
            <Text style={{fontSize: 34, color: colors.primary}}>{singleRestaurant.name}</Text>
            <Text style={{fontSize: 24, color: colors.lightPrimary}} >{`Review: ${singleRestaurant.rating}`}</Text>
          </View>
          <Carousel
            style={{ flex: 1 }}
            data={singleRestaurant.photos}
            renderItem={this._renderItem}
            sliderWidth={340}
            itemWidth={280}
          />
        </View>
      </SafeAreaView >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    backgroundColor: colors.background
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
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