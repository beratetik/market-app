import React from 'react'
import { useSelector } from 'react-redux'

import { PagiantionWrapper } from './styles'

const Pagination = () => {
  const products = useSelector(state => state.products)
  
  return (
    <PagiantionWrapper>
      <div>Prev</div>
      <div>Next</div>
    </PagiantionWrapper>
  )
}

export default Pagination
