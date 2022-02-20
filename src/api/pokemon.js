import { API_HOST } from '../utils/const'

export const getAllPokemons = async (endpoint) => {
  try {
    const url = endpoint || `${API_HOST}/pokemon?limit=20&offset=0`
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}
export const getPokemonDetailsByUrl = async (url) => {
  try {
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}

export const getPokemonDetailsById = async (id) => {
  try {
    const url = `${API_HOST}/pokemon/${id}`
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}
