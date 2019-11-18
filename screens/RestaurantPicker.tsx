import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Image} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { colors } from './constants'
import { restaurants } from './mocks';

function Card() {
  return <View style={styles.card} />;
}

export interface Restaurant {
  id: string,
  name: string,
  image: string,
  priceRange: number,
  rating: number,
}

export default class RestaurantPicker extends Component<any, any> {
  render() {
    const overlayProps = {
      left: {
        element:
        <View style={styles.overlayContainerRight}>
          <Text style={{color: 'red', fontSize: 42, fontWeight: 'bold'}}>NOPE</Text>
        </View>,
        title: 'NOPE',
      },
      right: {
        element: 
        <View style={styles.overlayContainerLeft}>
          <Text style={{color: 'green', fontSize: 42, fontWeight: 'bold'}}>LIKE</Text>
        </View>,
        title: 'LIKE',
      },
    }

    const overlayStyle = {
      fontSize: 45,
      fontWeight: 'bold',
      borderRadius: 10,
      padding: 10,
      overflow: 'hidden'
    }

    const overlayWrapperStyle = {
      position: 'absolute',
      backgroundColor: 'transparent',
      zIndex: 2,
      flex: 1,
      width: '100%',
      height: '100%'
    }


    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Swiper
            cards={restaurants}
            renderCard={(card) => {
              return (
                <View style={styles.card}>
                  <View style={styles.overlayContainer}>
                    <Text style={styles.overlayName}>{card.name}</Text>
                  </View>
                  <Image
                    style={styles.cardImage}
                    source={{uri: card.image}}
                  />
                </View>
              )
            }}
            onSwipedLeft={() => {console.log('Swiped Left')}}
            onSwipedRight={() => {console.log('Swiped Right')}}
            onSwipedAll={() => { console.log('onSwipedAll') }}
            cardIndex={0}
            backgroundColor={colors.background}
            overlayLabels={overlayProps}
            overlayLabelStyle={overlayStyle}
            overlayLabelWrapperStyle={overlayWrapperStyle}
            stackSize={3}>
          </Swiper>
          <View style={{height: 120 }}/>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    height: 80,
  },
  card: {
    flex: 1,
    justifyContent: "center",
  },
  overlayName: {
    color: 'white',
    fontSize: 34
  },
  overlayContainer: {
    position: 'absolute',
    zIndex: 10,
    top: 20, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    alignItems: 'center'
  },
  overlayContainerLeft: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: -120, 
    right: 0, 
    bottom: 0,
    justifyContent: 'center'
  },
  overlayContainerRight: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 220, 
    right: 0, 
    bottom: 0,
    justifyContent: 'center'
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  cardImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
    alignContent: "center",
    borderRadius: 10,
    margin: 10,
  }
});