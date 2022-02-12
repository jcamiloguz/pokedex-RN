import { AccountNavigation } from './AccountNavigation'
import { FavoriteNavigation } from './FavoriteNavigation'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native'
import { PokedexNavigation } from './PokedexNavigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export const Navigation = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      initialRouteName="Pokedex"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: (focused) => renderIcon(focused),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const renderIcon = () => {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -15 }}
    />
  )
}
