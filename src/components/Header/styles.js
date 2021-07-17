import styled from 'styled-components'

import { palette } from '../../shared/styles'

export const HeaderWrapper = styled.header`
  height: 77px;
  background-color: ${palette.blue};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  
  position: sticky;
  top: 0px;
  z-index: 20;
`
