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
      bottom: {
      element: <Text>BLEAH</Text>,
      title: 'BLEAH',
        style: {
          label: {
            backgroundColor: 'black',
            borderColor: 'black',
            color: 'white',
            borderWidth: 1
          },
          wrapper: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }
      },
      left: {
      element: <Text>NOPE</Text>,
      title: 'NOPE',
        style: {
          label: {
            backgroundColor: 'black',
            borderColor: 'black',
            color: 'white',
            borderWidth: 1
          },
          wrapper: {
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            marginTop: 30,
            marginLeft: -30
          }
        }
      },
      right: {
      element: <Text>LIKE</Text>,
      title: 'LIKE',
        style: {
          label: {
            backgroundColor: 'black',
            borderColor: 'black',
            color: 'white',
            borderWidth: 1
          },
          wrapper: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            marginTop: 30,
            marginLeft: 30
          }
        }
      },
      top: {
      element: <Text>SUPER</Text>,
      title: 'SUPER LIKE',
        style: {
          label: {
            backgroundColor: 'black',
            borderColor: 'black',
            color: 'white',
            borderWidth: 1
          },
          wrapper: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }
      }
    }

    const overlayStyle = {
      fontSize: 45,
      fontWeight: 'bold',
      borderRadius: 10,
      padding: 10,
      overflow: 'hidden'
    }


    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Swiper
            cards={restaurants}
            renderCard={(card) => {
              return (
                <View style={styles.card}>
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
            overlayLabel={overlayProps}
            overlayStyle={overlayStyle}
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