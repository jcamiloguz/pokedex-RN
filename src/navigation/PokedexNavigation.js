import { Pokedex } from '../screens/Pokedex'
import { Pokemon } from '../screens/Pokemon'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export function PokedexNavigation() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ title: 'Pokemon' }}
      />
      <Stack.Screen
        name="PokedexHome"
        component={Pokedex}
        options={{ title: 'Pokedex' }}
      />
    </Stack.Navigator>
  )
}
