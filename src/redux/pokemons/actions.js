import * as types from './types'
import * as api from '../../api'
import {Alert} from 'react-native'
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
    return pokemonData
  } catch (e) {
    Alert.alert('Error', e.message || `Error downloading ${value.name} data`)
    dispatch(setLoading(false))
  }
}

export const getPokemons = () => {
  return async (dispatch, getState) => {
    console.log('getState: ', getState())
    try {
      dispatch(setLoading(true))
      const {list, page} = getState().pokemons
      const params = {
        limit: ITEMS_PER_PAGE,
        offset: ITEMS_PER_PAGE * page
      }
      const newList = []
      const pokemonList = await api.getPokemons(params)

      pokemonList.data.results.map(async (value) => {
        const pokemonSpecificData = await _obtainSpecificPokemonData(value)
        newList.push(pokemonSpecificData.data)
      })

      const totalList = [...list, ...newList]
      // list.push(newList[0])

      // newList.map((value) => {
      //   list.push(value.data)
      // })

      console.log('totalList: ', totalList)
      console.log('list: ', list)
      console.log('newList: ', newList)
      console.log('Page: ', page)

      // _.orderBy(newList, ['id'])
      // dispatch(updateList(newList))
      _.orderBy(totalList, ['id'])
      dispatch(updateList(totalList))
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
