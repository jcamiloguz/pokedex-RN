import React, { useEffect, useState } from 'react'
import {
  addFavorite,
  getFavorites,
  isFavorite,
  removeFavorite,
} from '../../api/favorite'

import Icon from 'react-native-vector-icons/FontAwesome5'

export function Favorite({ id }) {
  const [isPokemonFavorite, setIsPokemonFavorite] = useState(false)
  const [reloadCheck, setReloadCheck] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const isFav = await isFavorite(id)
        setIsPokemonFavorite(isFav)
      } catch (err) {
        console.log(err)
        setIsPokemonFavorite(false)
      }
    })()
  }, [id, reloadCheck])

  const onRealoadCheck = () => {
    setReloadCheck(!reloadCheck)
  }

  const addPokemon = async () => {
    console.log('addFavorite: ', id)
    await addFavorite(id)
    const response = await getFavorites()
    console.log('response: ', response)
    onRealoadCheck()
  }

  const removePokemon = async () => {
    console.log('removeFavorite: ', id)
    await removeFavorite(id)
    const response = await getFavorites()
    console.log('response: ', response)
    onRealoadCheck()
  }

  return (
    <Icon
      name="heart"
      size={20}
      solid={isPokemonFavorite}
      color="#fff"
      onPress={isPokemonFavorite ? removePokemon : addPokemon}
    />
  )
}
