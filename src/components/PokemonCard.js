import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import React from 'react'

export function PokemonCard({ pokemon }) {
  const goToPokemon = () => {
    console.log(pokemon)
  }
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={style.card}>
        <View style={style.spacing}>
          <View style={style.bg}>
            <Text style={style.number}>#{`${pokemon.order}`}</Text>
            <Text style={style.name}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.img }} style={style.img} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
const style = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bg: {
    backgroundColor: 'grey',
  },
  img: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 15,
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11,
  },
})
