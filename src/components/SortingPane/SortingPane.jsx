import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sortProducts } from '../../shared/store/actions/products.actions'
import {
  PaneWrapper,
  BoxWrapper,
  Title,
  SelectItem,
  Label,
  Input
} from './styles'

import config from './config.json'

const SortingPane = () => {
  const { title, type, list } = config
  const sort = useSelector(state => state.products.sort)
  const dispatch = useDispatch()

  const onChange = (e) => dispatch(sortProducts(e.target.value))

  return (
    <PaneWrapper>
      <Title>{title}</Title>
      <BoxWrapper>
        {list.map(({ name, label }) => (
          <SelectItem key={name}>
            <Input
              id={name}
              value={name}
              checked={sort === name}
              {...{ type, name, onChange }}
            />
            <Label htmlFor={name}>{label}</Label>
          </SelectItem>
        ))}
      </BoxWrapper>
    </PaneWrapper>
  )
}

export default SortingPane
