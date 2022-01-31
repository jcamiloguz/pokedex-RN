import { Account } from '../screens/Account'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export function AccountNavigation() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountHome"
        component={Account}
        options={{ title: 'My Account' }}
      />
    </Stack.Navigator>
  )
}
