export const addToBasketHandler = (state, { payload }) => {
    if (state.cart.length) {
      const productIndex = state.cart.findIndex(item => item.slug === payload.slug)
      if (productIndex > -1) {
        state.cart[productIndex].qty += 1
        state.total = Number(state.total) + state.cart[productIndex].price
      } else {
        payload.qty = 1
        state.cart.push(payload)
        state.total = Number(state.total) + payload.price
      }
    } else {
      payload.qty = 1
      state.cart.push(payload)
      state.total = Number(state.total) + payload.price
    }
    state.total = state.total.toFixed(2)
  
    return {
      ...state
    }
  }
  
  export const increaseProductCountHandler = (state, { payload }) => {
    state.cart.map(item => {
      if (item.slug === payload) {
        item.qty += 1
        state.total = Number(state.total) + item.price
        state.total = state.total.toFixed(2)
      }
      return item
    })
    
    return {
      ...state
    }
  }
  
  export const subtractFromBasketHandler = (state, { payload }) => {
    const newCart =state.cart.reduce((acc, curr) => {
      if (curr.slug === payload) {
        if (curr.qty !== 1) {
          curr.qty -= 1
          state.total = Number(state.total) - curr.price
          state.total = state.total.toFixed(2)
          acc.push(curr)
          return acc
        }
        state.total = Number(state.total) - curr.price
        state.total = state.total.toFixed(2)
        return acc
      }
      acc.push(curr)
      return acc
    }, [])
  
    return {
      ...state,
      cart: newCart
    }
  }
  