import * as types from './types'

export const initialState = {
  list: [],
  loading: false,
  item: null
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {...state, loading: action.payload.loading}
    case types.UPDATE_LIST:
      return {...state, list: action.payload.list}
    case types.SET_ITEM:
      return {...state, item: action.payload.item}
    default:
      return state
  }
}

export default reducer
