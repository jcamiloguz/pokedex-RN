import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllPokemons, getPokemonDetails } from '../api/pokemon'

import { PokemonCard } from '../components/PokemonCard'
import { PokemonList } from '../components/PokemonList'

export function Pokedex() {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    ;(async () => {
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getAllPokemons(nextUrl)
      setNextUrl(response.next)
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

  const loadMorePokemons = () => {
    loadPokemons(nextUrl)
  }

  return (
    <SafeAreaView>
      <PokemonList>
        <FlatList
          data={pokemons}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(pokemon) => String(pokemon.id)}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          contentContainerStyle={styles.flatListContainer}
          onEndReached={loadMorePokemons}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            <ActivityIndicator
              size="large"
              style={styles.spinner}
              color="#aeaeae"
            />
          }
        />
      </PokemonList>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 10,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
})
