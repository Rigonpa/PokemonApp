import * as types from './types'

export const initialState = {
  list: [],
  loading: false,
  item: null,
  page: 0
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {...state, loading: action.payload.loading}
    case types.UPDATE_LIST:
      return {...state, list: action.payload.list}
    case types.SET_ITEM:
      return {...state, item: action.payload.item}
    case types.UPDATE_PAGE:
      return {...state, page: action.payload.page}
    default:
      return state
  }
}

export default reducer
