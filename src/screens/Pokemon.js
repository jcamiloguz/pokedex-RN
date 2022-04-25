import { useEffect, useState } from 'react'

import { Favorite } from '../components/Pokemon/Favorite'
import { Header } from '../components/Pokemon/Header'
import { ScrollView } from 'react-native'
import { Stats } from '../components/Pokemon/Stats'
import { Type } from '../components/Pokemon/Type'
import { getPokemonDetailsById } from '../api/pokemon'
import useAuth from '../hooks/useAuth'

// import Icon from 'react-native-vector-icons/FontAwesome5'

export function Pokemon({ navigation, route: { params } }) {
  const [pokemon, setPokemon] = useState(null)
  const { auth } = useAuth()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (auth ? <Favorite id={pokemon?.id} /> : null),
    })
  }, [navigation, params, pokemon])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getPokemonDetailsById(params.pokemonId)
        setPokemon(response)
      } catch {
        navigation.goBack()
      }
    })()
  }, [params])

  return pokemon ? (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        sprite={pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  ) : null
}
