import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sortProducts } from '../../../../../../shared/store/actions/products.actions'
import { Text } from '../../../../../../shared/components'
import { palette } from '../../../../../../shared/styles'

import { SelectItem, Input } from '../shared/styles'

const Radio = ({ type, list }) => {
  const sort = useSelector(state => state.products.sort)
  const dispatch = useDispatch()

  const onChange = (e) => dispatch(sortProducts(e.target.value))

  return (
    <>
      {list.map(({ name, label }) => (
        <SelectItem key={name}>
          <Input
            id={name}
            value={name}
            checked={sort === name}
            {...{ type, name, onChange }}
          />
          <Text
            type='label'
            htmlFor={name}
            value={label}
            color={palette.paneItemColor}
          />
        </SelectItem>
      ))}
    </>
  )
}

export default Radio
