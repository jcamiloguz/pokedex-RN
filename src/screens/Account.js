import { Text, View } from 'react-native'

import LoginForm from '../components/Auth/LoginForm'
import React from 'react'
import UserData from '../components/Auth/UserData'

export function Account() {
  const auth = null
  return <View>{auth ? <UserData /> : <LoginForm />}</View>
}
