import { Button, StyleSheet, Text } from 'react-native'

import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

export function NoLogged() {
  const navigation = useNavigation()
  const goToLogin = () => {
    navigation.navigate('Account')
  }
  return (
    <SafeAreaView style={styles.content}>
      <Text style={styles.text}>Youre no logged</Text>
      <Button title="Go to Login" onPress={goToLogin} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  conten: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
  },
})
