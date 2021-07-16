import React, { useEffect, useState } from 'react'

import { Loading } from '../../../../shared/components'
import { Checkbox, Radio } from './components'

import {
  BoxWrapper,
  Title
} from './styles'

const Panes = {
  'radio': Radio,
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
      <BoxWrapper {...{ type }}>
        <InnerComponent {...{ field, filters, filteredList, setFilteredList, type, list }} />
      </BoxWrapper>
    </>
  )
}

export default React.memo(Pane)
