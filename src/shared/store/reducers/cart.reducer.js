import {
  ADD_TO_BASKET,
  INCREASE_PRODUCT_COUNT,
  SUBTRACT_FROM_BASKET
} from '../constants/cart.types'

import * as actions from '../actions/cart.actions'

const initialState = {
  cart: [],
  total: "0.00"
}

export const ACTION_HANDLERS = {
  [ADD_TO_BASKET]: actions.addToBasketHandler,
  [INCREASE_PRODUCT_COUNT]: actions.increaseProductCountHandler,
  [SUBTRACT_FROM_BASKET]: actions.subtractFromBasketHandler
}

const cartReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

export default cartReducer
