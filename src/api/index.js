import axios from 'axios'
import {BASE_URL} from '../config/api'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'}
})

export const getPokemons = () => {
  const url = '/pokemon'
  return instance.get(url)
}

export const getPokemonData = (pokemonId) => {
  const url = `/pokemon/${pokemonId}`
  return instance.get(url)
}
