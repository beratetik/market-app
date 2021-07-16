import React from 'react'
import { useDispatch } from 'react-redux';

import { filterProducts } from '../../../../shared/store/actions/products.actions'

import { ProductTypeListWrapper, ProductTypeWrapper, Type } from './styles'

const ProductType = ({ name, slug, selected }) => {
  const dispatch = useDispatch()
  const onClick = () => dispatch(filterProducts('itemTypes', slug))

  return (
    <ProductTypeWrapper {...{ selected, onClick }} >
      <Type>{name}</Type>
    </ProductTypeWrapper>
  )
}

const ProductTypeList = ({ itemTypes, filters }) => {
  if (!itemTypes.length) return null

  return (
    <ProductTypeListWrapper>
      {itemTypes.map((item, index) => (
        <ProductType
          key={item.slug}
          selected={filters['itemTypes'].includes(index)}
          {...item}
        />
      ))}
    </ProductTypeListWrapper>
  )
}

export default ProductTypeList
