import React from 'react'

import { Image } from '../../../../shared/components'
import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductDetailsWrapper,
  Price,
  ProductName,
  AddBasketButton
} from './styles'

const ProductDetails = ({ name, price }) => (
  <ProductDetailsWrapper>
    <Price>₺ {price}</Price>
    <ProductName>{name}</ProductName>
  </ProductDetailsWrapper>
)

const ProductCard = ({ name, price, onClick }) => {
  return (
    <ProductCardWrapper>
      <ProductImageWrapper>
        <Image
          src={'https://picsum.photos/92/92'}
          alt={name}
          width={124}
          height={124}
          padding={16}
        />
      </ProductImageWrapper>
      <ProductDetails {...{ name, price }} />
      <AddBasketButton
        type="button"
        value="Add"
        {...{ onClick }}
      />
    </ProductCardWrapper>
  )
}

export default React.memo(ProductCard)
