import { POKEMON_TYPE_COLORS } from './const'

export const getColorByPokemonType = (type) =>
  POKEMON_TYPE_COLORS[type.toLowerCase()]
