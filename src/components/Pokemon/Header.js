import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { getColorByPokemonType } from '../../utils/getColorByPokemonType'

export function Header({ name, order, type, sprite }) {
  const color = getColorByPokemonType(type)
  const BgStyles = [{ backgroundColor: color, ...styles.bg }]
  return (
    <>
      <View style={BgStyles} />
      <SafeAreaView style={styles.content}>
        <View>
          <Text style={styles.name}> {name}</Text>
          <Text style={styles.order}>#{`${order}`}</Text>
        </View>
        <View style={styles.contentImage}>
          <Image source={{ uri: sprite }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  )
}
const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 400,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: '#f8f8f8',
    fontSize: 27,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  order: {
    color: '#f8f8f8',
    fontWeight: 'bold',
  },
  contentImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
})
