import * as types from './types'
import * as api from '../../api'
import {Alert} from 'react-native'
import _ from 'lodash'

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

_obtainSpecificPokemonData = async (value) => {
  try {
    const endPoint = value.url.substring(25, 50)
    const pokemonData = await api.getPokemonData(value.url)
    return pokemonData
  } catch (e) {
    Alert.alert('Error', e.message || `Error downloading ${value.name} data`)
    dispatch(setLoading(false))
  }
}

export const getPokemons = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true))
      const list = []
      const pokemonList = await api.getPokemons()

      pokemonList.data.results.map(async (value) => {
        const pokemonSpecificData = await _obtainSpecificPokemonData(value)
        // console.log('pokemonSpecificData: ', pokemonSpecificData)
        list.push(pokemonSpecificData.data)
      })

      _.orderBy(list, ['id'])
      dispatch(updateList(list))
      dispatch(setLoading(false))

      // for (var pokemonId = 1; pokemonId < 31; pokemonId++) {
      //   const pokemonObj = await api.getPokemonData(pokemonId)
      //   list.push(pokemonObj.data)
      // }
    } catch (e) {
      Alert.alert('Error', e.message || 'Error downloading pokemon list')
      dispatch(setLoading(false))
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
