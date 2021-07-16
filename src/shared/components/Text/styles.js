import styled, { css } from 'styled-components'

import { palette, typo } from '../../styles'

const commonStyles = css`
  color: ${({ color }) => color || palette.itemTextColor};
  font-weight: ${({ weight }) => weight || 400};
  ${typo.text}
`

export const TextWrapper = styled.span`
  ${commonStyles}
`

export const LabelWrapper = styled.label`
  ${commonStyles}
  margin-left: ${({ left }) => left || 12}px;
`
