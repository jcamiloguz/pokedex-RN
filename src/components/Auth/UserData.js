import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'

import { getFavorites } from '../../api/favorite'
import useAuth from '../../hooks/useAuth'
import { useFocusEffect } from '@react-navigation/native'

export default function UserData() {
  const { logout, auth } = useAuth()
  const [total, setTotal] = useState(0)
  useFocusEffect(
    useCallback(() => {
      ;(async () => {
        const favorites = await getFavorites()
        setTotal(favorites.length)
      })()
    }, [])
  )

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>{`${auth.firstname} ${auth.lastname}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Name" text={`${auth.firstname} ${auth.lastname}`} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total Favorites" text={`${total} Pokemons`} />
      </View>

      <Button title="Logout" onPress={() => logout()} />
    </View>
  )
}

function ItemMenu({ title, text }) {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
})
