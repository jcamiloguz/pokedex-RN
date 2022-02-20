import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { getColorByPokemonType } from '../../utils/getColorByPokemonType'

export function Type({ types }) {
  console.log(types)
  // const PillStyle = getColorByPokemonType()
  return (
    <View style={styles.content}>
      {types.map(({ type }, index) => (
        <View
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(type.name),
          }}
          key={index}
        >
          <Text style={styles.pillName}>{type.name}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  pillName: {
    color: '#f8f8f8',
    textTransform: 'capitalize',
    fontWeight: '600',
  },
})
