import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Loading, Text } from '../../../../../../shared/components'
import { palette } from '../../../../../../shared/styles'
import { searchFilter } from '../../../../../../shared/utils'
import { filterProducts } from '../../../../../../shared/store/product/product.actions'

import { SelectItem, Input } from '../shared/styles'
import {
  SelecListWrapper,
  SearchWrapper
} from './styles'

const ItemLabel = ({ slug, name, count }) => {
  if (!count) {
    return (
      <Text
        type='label'
        htmlFor={slug}
        value={name}
        color={palette.paneItemColor}
      />
    )
  }

  return (
    <>
      <Text
        type='label'
        htmlFor={slug}
        value={name}
        color={palette.paneItemColor}
      />
      <Text
        type='label'
        left={4}
        htmlFor={slug}
        value={`(${count})`}
        color={palette.leftPaneItemColor} />
    </>
  )
}

const Item = ({ slug, name, type, checked, count, field }) => {
  const dispatch = useDispatch()

  return (
    <SelectItem>
      <Input
        id={slug}
        value={slug}
        name={slug}
        onChange={() => dispatch(filterProducts(field, slug))}
        {...{ type, checked }}
      />
      <ItemLabel {...{ slug, name, count }} />
    </SelectItem>
  )
}

const SelectList = ({ list, type, filteredList, filters, field }) => {
  const isChecked = (item) => {
    const index = filteredList.findIndex(checkedItem => checkedItem.slug === item.slug)
    if (index > -1) return filters.includes(index)
    return false
  }

  return (
    <SelecListWrapper>
      {list.map(item => (
        <Item
          key={item.slug}
          checked={isChecked(item)}
          {...{ type, field, ...item }}
        />
      ))}
    </SelecListWrapper>
  )
}

const Checkbox = ({ filteredList, ...rest }) => {
  const [list, setList] = useState(filteredList)

  const searchInFilter = (e) => {
    if (e.target.value.trim() === "") {
      setList(filteredList)
      return
    }

    setList(() => list.filter(item => searchFilter(item, e.target.value)))
  }

  return (
    <>
      <SearchWrapper>
        <Input
          type="text"
          placeholder={`Search ${'pane'}`}
          disabled={false}
          onChange={searchInFilter}
        />
      </SearchWrapper>
      {!list.length ? <Loading inside={true} text='No result found!' /> : null}
      <SelectList {...{ list, filteredList, ...rest }} />
    </>
  )
}

export default Checkbox
