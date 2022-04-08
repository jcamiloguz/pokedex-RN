import * as Yup from 'yup'

import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import UseAuth from '../../hooks/UseAuth'
import { useFormik } from 'formik'
import { user } from '../../utils/userDB'

export default function LoginForm() {
  const [error, setError] = useState('')
  UseAuth()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (el) => {
      setError('')
      const { username, password } = user
      if (username === el.username && password === el.password) {
        alert('Login success')
      } else {
        setError('Username or password is incorrect')
      }
    },
    onChangeText: (el) => {
      console.log(el)
    },
    validateOnChange: false,
  })
  return (
    <View>
      <Text style={styles.title}>Login Account</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <Button title="Login" onPress={formik.handleSubmit} />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
  },
})

const validationSchema = () => ({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username is too short'),
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Password is too short')
    .max(20, 'Password is too long'),
})
const initialValues = () => ({
  username: '',
  password: '',
})
