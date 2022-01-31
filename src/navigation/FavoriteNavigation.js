import { Favorite } from '../screens/Favorite'
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
    </Stack.Navigator>
  )
}
