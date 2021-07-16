import React, { useEffect, useState } from 'react'

import { Loading } from '../../../../shared/components'
import { Checkbox } from './components'

import {
  BoxWrapper,
  Title
} from './styles'

const Panes = {
  'radio': Checkbox,
  'checkbox': Checkbox
}

const Pane = ({ type = 'checkbox', list, filters, field, title }) => {
  const [filteredList, setFilteredList] = useState(list || [])

  useEffect(() => {
    if (list?.length !== filteredList?.length) setFilteredList(list)
  }, [list])

  const InnerComponent = !filteredList?.length ? Loading : Panes[type]

  return (
    <>
      <Title>{title}</Title>
      <BoxWrapper>
        <InnerComponent {...{ field, filters, filteredList, setFilteredList, type }} />
      </BoxWrapper>
    </>
  )
}

export default React.memo(Pane)
