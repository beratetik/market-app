import React from 'react'

import { Image } from '../../shared/components'
import logo from '../../assets/icons/logo.svg'

import { Basket } from './components'
import { HeaderWrapper } from './styles'

const Header = () => (
  <HeaderWrapper>
    <Image
      alt="logo"
      src={logo}
      width={141.25}
      height={40.32}
    />
    <Basket />
  </HeaderWrapper>
)

export default Header
