import * as types from './types'
import * as api from '../../api'
import {Alert} from 'react-native'

const setLoading = (loading) => {
  const action = {
    type: types.SET_LOADING,
    payload: {loading: loading}
  }
  return action
}

const updateList = (list) => {
  const action = {
    type: types.UPDATE_LIST,
    payload: {list: list}
  }
  return action
}

export const getPokemons = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true))
      const list = []
      for (var pokemonId = 1; pokemonId < 31; pokemonId++) {
        const pokemonObj = await api.getPokemonData(pokemonId)
        list.push(pokemonObj.data)
      }
      dispatch(updateList(list))
      dispatch(setLoading(false))
    } catch (e) {
      Alert.alert('Error', e.message || 'Error al descargar los pokemons')
      dispatch(setLoading(false))
    } finally {
    }
  }
}

export const setItem = (item) => {
  const action = {
    type: types.SET_ITEM,
    payload: {item}
  }
  return action
}
