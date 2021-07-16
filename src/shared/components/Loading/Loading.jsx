import React from 'react'

import { LoadingWrapper } from './styles'

const Loading = ({ text = 'Loading...', noItem, ...rest }) => {
  const content = noItem ? 'No item found!' : text

  return (
    <LoadingWrapper {...rest} >
      {content}
    </LoadingWrapper>
  )
}

export default Loading
