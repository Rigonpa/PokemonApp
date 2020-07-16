import axios from 'axios'
import {BASE_URL} from '../config/api'
import qs from 'qs'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'}
})

export const getPokemons = (params) => {
  const url = `/pokemon?${qs.stringify(params, {skipNulls: true})}`
  return instance.get(url)
}

export const getPokemonData = (endPoint) => {
  return instance.get(endPoint)
}
