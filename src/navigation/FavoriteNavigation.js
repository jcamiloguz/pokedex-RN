import { Favorite } from '../screens/Favorite'
import { Pokemon } from '../screens/Pokemon'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export function FavoriteNavigation() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteHome"
        component={Favorite}
        options={{ title: 'Favorites' }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: '#f8f8f8',
        }}
      />
    </Stack.Navigator>
  )
}
