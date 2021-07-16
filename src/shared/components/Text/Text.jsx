import React from 'react'

import { TextWrapper, LabelWrapper } from './styles'

const types = {
  span: TextWrapper,
  label: LabelWrapper
}

const Text = ({ value, type = 'span', ...rest }) => {
  const Component = types[type]

  return (
    <Component {...rest}>
      {value}
    </Component>
  )
}

export default Text
