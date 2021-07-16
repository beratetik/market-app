import React from 'react'
import { useDispatch } from 'react-redux'

import { increaseProductCount, subtractFromBasket } from '../../../../shared/store/actions/cart.actions'
import { Text } from '../../../../shared/components'

import plusIcon from '../../../../assets/icons/plus.svg'
import minusIcon from '../../../../assets/icons/minus.svg'

import {
  BasketItemWrapper,
  Price,
  CounterWrapper,
  Button,
  Count,
  Image,
  ProductDetails
} from './styles'

const CounterButtons = ({ qty, slug }) => {
  const dispatch = useDispatch()

  return (
    <CounterWrapper>
      <Button onClick={() => dispatch(subtractFromBasket(slug))} >
        <Image src={minusIcon} alt='minus sign' />
      </Button>
      <Count>{qty}</Count>
      <Button second onClick={() => dispatch(increaseProductCount(slug))}>
        <Image src={plusIcon} alt='plus sign' />
      </Button>
    </CounterWrapper>
  )
}

const BasketItem = ({ name, price, ...rest }) => (
  <BasketItemWrapper>
    <ProductDetails>
      <Text value={name} />
      <Price>₺{price}</Price>
    </ProductDetails>
    <CounterButtons {...rest} />
  </BasketItemWrapper>
)

export default BasketItem
