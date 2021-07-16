import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { goToPage } from '../../../../shared/store/product/product.actions'

import { Image } from '../../../../shared/components'
import { PagiantionWrapper, Button, PageNoButton } from './styles'
import grayArrow from '../../../../assets/icons/arrow-gray.svg'
import blueArrow from '../../../../assets/icons/arrow-blue.svg'

const Pagination = ({ totalPage, currentPage, ...props }) => {
  const [paginationArr, setPaginationArr] = useState([])
  const dispatch = useDispatch()

  // useEffect(() => {
  //   setPaginationArr(() => [...Array(totalPage).keys()].map(item => item + 1))
  // }, [totalPage])

  if (!totalPage) return null

  // const paginationArr = [...Array(totalPage).keys()].map(item => item + 1)

  return (
    <PagiantionWrapper>
      <Button
        active={currentPage > 1}
        onClick={() => {
          if (currentPage > 1) console.log("prev")
        }}
      >
        <Image
          reverse
          src={currentPage > 1 ? blueArrow : grayArrow}
          width={24}
          height={24}
          alt='Go Previous Page'
        />
        Prev
      </Button>
      {paginationArr?.slice(0, 4)?.map(item => <PageNoButton onClick={() => dispatch(goToPage(item))} active={item === currentPage}>{item}</PageNoButton>)}
      <span>...</span>
      {paginationArr?.slice(-4)?.map(item => <PageNoButton onClick={() => dispatch(goToPage(item))} active={item === currentPage}>{item}</PageNoButton>)}
      <Button
        active={currentPage <= totalPage}
        onClick={() => console.log("Next")}
      >
        Next
        <Image
          src={currentPage <= totalPage ? blueArrow : grayArrow}
          alt='Go Next Page'
          width={24}
          height={24}
        />
      </Button>
    </PagiantionWrapper>
  )
}

export default Pagination
