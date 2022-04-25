import React, { useCallback, useState } from 'react'

import { FlatList } from 'react-native'
import { NoLogged } from '../components/NoLogged'
import { PokemonCard } from '../components/PokemonCard'
import { PokemonList } from '../components/PokemonList'
import { getFavorites } from '../api/favorite'
import { getPokemonDetailsById } from '../api/pokemon'
import useAuth from '../hooks/useAuth'
import { useFocusEffect } from '@react-navigation/native'

export function Favorite() {
  const [favorites, setFavorites] = useState([])

  const { auth } = useAuth()
  useFocusEffect(
    useCallback(() => {
      if (auth) {
        ;(async () => {
          const response = await getFavorites()
          const pokemonArray = []
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsById(id)
            pokemonArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              img: pokemonDetails.sprites.other['official-artwork']
                .front_default,
            })
          }
          setFavorites(pokemonArray)
          console.log(response)
        })()
      }
    }, [auth])
  )

  return !auth ? (
    <NoLogged />
  ) : (
    <PokemonList>
      <FlatList
        data={favorites}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        onEndReachedThreshold={0.1}
      />
    </PokemonList>
  )
}
