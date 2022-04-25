import AsyncStorage from '@react-native-async-storage/async-storage'
import { FAVORITE_STORAGE } from '../utils/const'

export async function addFavorite(id) {
  try {
    const favorites = await getFavorites()
    favorites.push(id)
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
  } catch (err) {
    console.log(err)
  }
}
export async function getFavorites() {
  try {
    let favorites = await AsyncStorage.getItem(FAVORITE_STORAGE)
    favorites = JSON.parse(favorites) || []
    return favorites
  } catch (err) {
    console.log(err)
  }
}

export async function isFavorite(id) {
  try {
    const favorites = await getFavorites()
    return favorites.includes(id)
  } catch (err) {
    console.log(err)
  }
}

export async function removeFavorite(id) {
  try {
    const favorites = await getFavorites()
    const newFavorites = favorites.filter((item) => item !== id)
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites))
  } catch (err) {
    console.log(err)
  }
}
