import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllPokemons, getPokemonDetails } from '../api/pokemon'

import { PokemonCard } from '../components/PokemonCard'
import { PokemonList } from '../components/PokemonList'

export function Pokedex() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    ;(async () => {
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getAllPokemons()
      const pokemonArray = []
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetails(pokemon.url)
        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          img: pokemonDetails.sprites.other['official-artwork'].front_default,
        })
      }
      setPokemons([...pokemons, ...pokemonArray])
      console.log(pokemons)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <PokemonList>
        <FlatList
          data={pokemons}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(pokemon) => String(pokemon.id)}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          contentContainerStyle={styles.flatListContainer}
        />
      </PokemonList>
    </View>
  )
}
const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 10,
  },
})
