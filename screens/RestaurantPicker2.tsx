import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Image } from 'react-native';
import { colors } from './constants'
import Swiper, { Restaurant } from './Swiper'

function Card() {
  return <View style={styles.card} />;
}

const FakeRes: Restaurant[] = [
  {
    id: '1',
    name: 'Restaurant 1',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    priceRange: 2,
    rating: 4,
  }, {
    id: '2',
    name: 'Restaurant 2',
    image: 'https://www.visitpeterborough.com/imageresizer/?image=%2Fdmsimgs%2Frestaurant_stock_904x528_232323324.jpg&action=ProductDetailProFullWidth',
    priceRange: 3,
    rating: 3,
  }, {
    id: '3',
    name: 'Restaurant 3',
    image: 'https://media2.fdncms.com/stranger/imager/u/large/40778052/dsc_2692_mag.jpg',
    priceRange: 4,
    rating: 5,
  }

]

export default class RestaurantPicker extends Component<any, any> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Swiper 
            cards={FakeRes} 
            onSwipedLeft={(e) => {console.log('Swiped Left')}}
            onSwipedRight={(e) => {console.log('Swiped Right')}}
          ></Swiper>
        </View>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
});