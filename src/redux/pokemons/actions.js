import * as types from './types'
import {api} from '../../api'
import {Alert} from 'react-native'

const setLoading = (loading) => {
  const action = {
    type: types.SET_LOADING,
    payload: {loading}
  }
  return action
}

const updateList = (list) => {
  const action = {
    type: types.UPDATE_LIST,
    payload: {list}
  }
  return action
}

const getPokemons = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true))
      const getPokemonRes = await api.getPokemons()
      const list = getPokemonRes.results
      dispatch(updateList(list))
    } catch (e) {
      Alert.alert('Error', e.message || 'Error al descargar los pokemons')
    } finally {
      dispatch(setLoading(false))
    }
  }
}
