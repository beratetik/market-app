import styled from 'styled-components'

import { palette } from '../../../../../../shared/styles'

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
`

export const ButtonText = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  ${({ reverse }) => reverse ? `margin-left: 7px`: 'margin-right: 7px'};
  ${({ active }) => {
    if (active) return `
      color: ${palette.blue};
      cursor: pointer;
    `
    return `color: ${palette.leftPaneTitleColor}`
  }};
`
