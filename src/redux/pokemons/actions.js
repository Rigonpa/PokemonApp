import * as types from './types'
import * as api from '../../api'
import {Alert} from 'react-native'
import {Actions} from 'react-native-router-flux'
import _ from 'lodash'

const ITEMS_PER_PAGE = 10
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

const updatePage = (page) => {
  const action = {
    type: types.UPDATE_PAGE,
    payload: {page: page}
  }
  return action
}

export const addElementToList = (data) => {
  return (dispatch, getState) => {
    const {list} = getState().pokemons
    const newList = [data, ...list]
    dispatch(updateList(newList))
    Alert.alert('Congrats', `${data.name} was created!`, [
      {text: 'Accept', onPress: () => Actions.pop()}
    ])
  }
}

export const initList = () => {
  return (dispatch) => {
    dispatch(updateList([]))
    dispatch(updatePage(0))
    dispatch(getPokemons())
  }
}

export const fetchNextPage = () => {
  return (dispatch, getState) => {
    const {page} = getState().pokemons
    const newPage = page + 1
    dispatch(updatePage(newPage))
    dispatch(getPokemons())
  }
}

_obtainSpecificPokemonData = async (value) => {
  try {
    const endPoint = value.url.substring(25, 50)
    const pokemonData = await api.getPokemonData(value.url)
    return pokemonData.data
  } catch (e) {
    Alert.alert('Error', e.message || `Error downloading ${value.name} data`)
    dispatch(setLoading(false))
  }
}

export const getPokemons = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true))
      const {list, page} = getState().pokemons
      const params = {
        limit: ITEMS_PER_PAGE,
        offset: ITEMS_PER_PAGE * page
      }
      const pokemonList = await api.getPokemons(params)
      const apiCallsArray = pokemonList.data.results.map(async (value) => {
        return _obtainSpecificPokemonData(value)
      })
      const newList = await Promise.all(apiCallsArray)
      const totalList = [...list, ...newList]
      _.orderBy(totalList, ['id'])
      dispatch(updateList(totalList))
      dispatch(setLoading(false))
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
