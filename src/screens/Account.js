import LoginForm from '../components/Auth/LoginForm'
import React from 'react'
import UserData from '../components/Auth/UserData'
import { View } from 'react-native'
import useAuth from '../hooks/useAuth'

export function Account() {
  const auth = useAuth().auth
  return <View>{auth ? <UserData /> : <LoginForm />}</View>
}
