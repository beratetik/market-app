import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { migrateManufacturers } from '../../shared/store/actions/products.actions'
import { SortingPane } from '../../components'
import { Pane } from './components'
import { PanesWrapper, PanesStickyWrapper } from './styles'
import config from './config.json'

const _panes_ = [
  // {
  //   title: "Sorting",
  //   type: 'radio',
  //   search: false
  // },<
  {
    title: "Brands",
    type: 'checkbox',
    search: true,
    placeholder: "brand",
    field: 'manufacturer'
  },
  {
    title: "Tags",
    type: 'checkbox',
    search: true,
    placeholder: "tag",
    field: 'tags'
  }
]


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
        <SortingPane />
        {config.map(item => (
          <Pane
            list={products[item.field]}
            key={item.field}
            filters={products.filters[item.field]}
            {...item}
          />
        ))}
      </PanesStickyWrapper>
    </PanesWrapper>
  )
}

export default Panes
