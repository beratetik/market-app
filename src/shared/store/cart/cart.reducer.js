import {
  ADD_TO_BASKET,
  INCREASE_PRODUCT_COUNT,
  SUBTRACT_FROM_BASKET
} from './cart.types'

import * as handler from './cart.handlers'

const initialState = {
  cart: [],
  total: "0.00"
}

export const ACTION_HANDLERS = {
  [ADD_TO_BASKET]: handler.addToBasketHandler,
  [INCREASE_PRODUCT_COUNT]: handler.increaseProductCountHandler,
  [SUBTRACT_FROM_BASKET]: handler.subtractFromBasketHandler
}

const cartReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

export default cartReducer
