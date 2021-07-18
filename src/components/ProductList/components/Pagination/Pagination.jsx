import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { goToPage } from '../../../../shared/store/product/product.actions'

import { ControlButton } from './components'
import { PagiantionWrapper, PageNoButton, Dots } from './styles'

const defaultRange = 8

const Pagination = ({ totalPage, currentPage }) => {
  const [pages, setPages] = useState([])
  const dispatch = useDispatch()


  useEffect(() => {
    if (totalPage <= defaultRange) {
      setPages([...Array(totalPage).keys()].map(i => i + 1))
      return
    }
    if (currentPage < defaultRange) {
      const rightPart = new Array(defaultRange / 2).fill('').map((_, i) => totalPage - i).reverse()

      let leftPart = [...Array(defaultRange / 2).keys()].map((i) => i + 1)

      if (currentPage >= defaultRange / 2)
        leftPart = [...Array(currentPage + 1).keys()].map((i) => i + 1)
      setPages([
        ...leftPart,
        '...',
        ...rightPart
      ])
      return
    } else if (currentPage <= totalPage + 1 - defaultRange) {
      const rightPart = new Array(defaultRange / 2).fill('').map((_, i) => totalPage - i).reverse()
      const midPart = [...Array(4).keys()].map((i) => i - 2).map(i => currentPage - i).reverse()
      const leftPart = [...Array(defaultRange / 2).keys()].map((i) => i + 1)

      setPages([
        ...leftPart,
        '...',
        ...midPart,
        '...',
        ...rightPart
      ])
      return
    } else if (currentPage <= (totalPage + 1 - defaultRange / 2) && currentPage >= totalPage - defaultRange) {
      const leftPart = [...Array(defaultRange / 2).keys()].map((i) => i + 1)
      const rightPart = [...Array(totalPage + 2 - currentPage).keys()].map(i => i - 1).map(i => currentPage + i)

      setPages([
        ...leftPart,
        '...',
        ...rightPart
      ])
      return
    }


  }, [currentPage, totalPage])

  if (!totalPage) return null

  return (
    <PagiantionWrapper>
      <ControlButton
        type="Prev"
        disabled={currentPage === 1}
        {...{ currentPage }}
        onClick={() => dispatch(goToPage(currentPage - 1))}
      />
      {pages.map((item, index) => {
        if (!Number.isInteger(item)) return <Dots key={index}>...</Dots>
        return (
          <PageNoButton
            key={index}
            onClick={() => dispatch(goToPage(item))}
            active={item === currentPage}>
            {item}
          </PageNoButton>
        )
      }
      )}
      <ControlButton
        type="Next"
        disabled={currentPage === totalPage}
        {...{ currentPage, totalPage }}
        onClick={() => dispatch(goToPage(currentPage + 1))}
      />
    </PagiantionWrapper>
  )
}

export default Pagination
