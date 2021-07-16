import { LOADING, GET_MANUFACTURERS } from '../constants/manufacturer.types'
import * as actions from '../actions/manufacturer.actions'

const initialState = {
  list: []
}

export const ACTION_HANDLERS = {
  [GET_MANUFACTURERS]: actions.getManufacturersHandler,
  [LOADING]: actions.setLoadingHandler
}

const manufacturersReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

export default manufacturersReducer
