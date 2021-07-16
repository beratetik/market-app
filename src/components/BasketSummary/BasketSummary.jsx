import React from 'react'
import { useSelector } from 'react-redux'

import { BasketItem } from './components'
import {
  BasketSummaryWrapper,
  BoxWrapper,
  BasketWrapper,
  Total,
  EmptyBasket
} from './styles'

const getBasket = ({ cart, total }) => {
  if (!cart?.length) return <EmptyBasket>Your basket is empty</EmptyBasket>

  return (
    <>
      <BoxWrapper>
        {cart.map(item => <BasketItem key={item.slug} {...item} />)}
      </BoxWrapper>
      <Total>₺{total}</Total>
    </>
  )
}

const BasketSummary = () => {
  const data = useSelector(state => state.cart)

  return (
    <BasketSummaryWrapper>
      <BasketWrapper>
        {getBasket(data)}
      </BasketWrapper>
    </BasketSummaryWrapper>
  )
}

export default BasketSummary
