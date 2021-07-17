import React from 'react'

import { Image } from '../../../../../../shared/components'

import { Button, ButtonText } from './styles'

import grayArrow from '../../../../../../assets/icons/arrow-gray.svg'
import blueArrow from '../../../../../../assets/icons/arrow-blue.svg'

const ButtonTypes = {
  'Prev': 'Go Previous Page',
  'Next': 'Go Next Page'
}

const Icon = ({ active, type, currentPage }) => (
  <Image
    reverse={type === 'Prev' ? true : false}
    src={active ? blueArrow : grayArrow}
    width={24}
    height={24}
    alt={ButtonTypes[type]}
  />
)

const ButtonContent = ({ type, currentPage, totalPage, ...rest }) => {
  const active = type === 'Prev' ? currentPage > 1 : currentPage < totalPage
  if (type === "Prev") {
    return (
      <>
        <Icon {...{ type, currentPage, active }} />
        <ButtonText {...{ active, ...rest }}>{type}</ButtonText>
      </>
    )

  }

  return (
    <>
      <ButtonText {...{ active, ...rest }}>{type}</ButtonText>
      <Icon {...{ type, currentPage, active }} />
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
