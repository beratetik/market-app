import { LOADING, GET_MANUFACTURERS } from './manufacturer.types'
import * as handlers from './manufacturer.handlers'

const initialState = {
  list: []
}

export const ACTION_HANDLERS = {
  [GET_MANUFACTURERS]: handlers.getManufacturersHandler,
  [LOADING]: handlers.setLoadingHandler
}

const manufacturersReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

export default manufacturersReducer
