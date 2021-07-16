import styled, { css } from 'styled-components'

import { palette } from '../../../../shared/styles'

export const PagiantionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  border: none;
  
  ${({ active }) => {
    if (active) return `
      color: ${palette.blue};
      cursor: pointer;
    `
    return `color: ${palette.leftPaneTitleColor}`
  }};
`

export const PageNoButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  border: none;
  cursor: pointer;
  padding: 12px;
  border-radius: 2px;

  ${({ active }) => {
    if (active) return css`
      background-color: ${palette.blue};
      color: ${palette.white};
      `
    return css`
      background-color: transparent;
      color: ${palette.leftPaneTitleColor};
    `
  }}
`
