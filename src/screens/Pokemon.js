import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { getPokemonDetailsById } from '../api/pokemon'
import { Header } from '../components/Pokemon/Header'
import { Stats } from '../components/Pokemon/Stats'
import { Type } from '../components/Pokemon/Type'
// import Icon from 'react-native-vector-icons/FontAwesome5'

export function Pokemon({ navigation, route: { params } }) {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    navigation.setOptions({
      headeRigth: () => null,
    })
  }, [navigation, params])

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
