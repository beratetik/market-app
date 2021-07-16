import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { migrateManufacturers } from '../../shared/store/product/product.actions'

import { Pane } from './components'
import { PanesWrapper, PanesStickyWrapper } from './styles'
import config from './config.json'

const Panes = () => {
  const { products, manufacturer } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    const isNameFieldExist = products.manufacturer.slice(1).some(item => item.name?.length)
    if (!isNameFieldExist && manufacturer.list.length && products.manufacturer.length) {
      dispatch(migrateManufacturers(manufacturer.list))
    }
  }, [manufacturer, products.manufacturer])

  return (
    <PanesWrapper>
      <PanesStickyWrapper>
        {config.map((item, index) => (
          <Pane
            list={products[item.field]}
            key={index}
            filters={products.filters[item.field]}
            {...item}
          />
        ))}
      </PanesStickyWrapper>
    </PanesWrapper>
  )
}

export default Panes
