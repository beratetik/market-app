import React from 'react'

import { Image } from '../../../../../../shared/components'

import { Button, ButtonText } from './styles'

import grayArrow from '../../../../../../assets/icons/arrow-gray.svg'
import blueArrow from '../../../../../../assets/icons/arrow-blue.svg'

const ButtonTypes = {
  'Prev': 'Go Previous Page',
  'Next': 'Go Next Page'
}

const Icon = ({ active, type, reverse }) => (
  <Image
    src={active ? blueArrow : grayArrow}
    width={24}
    height={24}
    alt={ButtonTypes[type]}
    {...{ reverse }}
  />
)

const ButtonContent = ({ type, currentPage, totalPage }) => {
  const active = type === 'Prev' ? currentPage > 1 : currentPage < totalPage
  const reverse= type === 'Prev' ? true : false

  if (type === "Prev") {
    return (
      <>
        <Icon {...{ type, currentPage, active, reverse }} />
        <ButtonText {...{ active, reverse }}>{type}</ButtonText>
      </>
    )

  }

  return (
    <>
      <ButtonText {...{ active, reverse }}>{type}</ButtonText>
      <Icon {...{ type, currentPage, active, reverse }} />
    </>
  )
}

const ControlButton = ({ currentPage, onClick, type, totalPage }) => (
  <Button
    disabled={currentPage === 1}
    {...{ onClick }}
  >
    <ButtonContent  {...{ type, currentPage, totalPage }} />
  </Button>
)

export default ControlButton
