import styled from 'styled-components'

import { palette } from '../../../../../../shared/styles'

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;

  cursor: ${({ active }) => active ? 'pointer' : 'default' };
`

export const ButtonText = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: ${({ active }) => active ? palette.blue : palette.leftPaneTitleColor};
  ${({ reverse }) => reverse ? `margin-left: 7px`: 'margin-right: 7px'};
`
