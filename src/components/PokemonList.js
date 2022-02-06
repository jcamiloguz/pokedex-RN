import React from 'react'
import { Text } from 'react-native'

export function PokemonList({ children }) {
  return (
    <>
      <Text>Pokemon List</Text>
      {children}
    </>
  )
}
