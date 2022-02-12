import { Navigation } from './src/navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native'
// import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}
