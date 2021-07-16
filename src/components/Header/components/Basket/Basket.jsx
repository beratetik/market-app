import React from 'react'
import { useSelector } from 'react-redux'

import { Image } from '../../../../shared/components'
import { palette } from '../../../../shared/styles'
import basketIcon from '../../../../assets/icons/basket.svg'

import { BasketContainer, BasketWrapper, Price } from './styles'


const Basket = () => {
  const { total } = useSelector(state => state.cart)
  if (total === "0.00") return null

  return (
    <BasketContainer>
      <BasketWrapper>
        <Image
          src={basketIcon}
          alt="basket icon"
          width={24}
          height={24}
        />
        <Price color={palette.white}>₺ {total}</Price>
      </BasketWrapper>
    </BasketContainer>
  )
}

export default Basket
