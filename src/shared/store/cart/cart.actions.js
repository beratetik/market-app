import * as cartTypes from './cart.types'

// Action Creators
export const addToBasket = product => ({
  type: cartTypes.ADD_TO_BASKET,
  payload: product
})

export const increaseProductCount = slug => ({
  type: cartTypes.INCREASE_PRODUCT_COUNT,
  payload: slug
})

export const subtractFromBasket = slug => ({
  type: cartTypes.SUBTRACT_FROM_BASKET,
  payload: slug
})
