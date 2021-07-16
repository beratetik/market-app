import styled, { css } from 'styled-components'

import { palette } from '../../../../shared/styles'

export const ProductTypeListWrapper = styled.div`
  display: flex;
  margin: 16px;
`

const selectedTagStyle = css`
  background-color: ${palette.blue};
  color: ${palette.defaultTagBG};
`

export const ProductTypeWrapper = styled.div`
  cursor: pointer;
  background-color: ${palette.defaultTagBG};
  color: ${palette.blue};
  padding: 6px 16px;
  border-radius: 2px;
  margin-right: 8px;

  ${({ selected }) => selected && selectedTagStyle}
`

export const Type = styled.span`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  user-select: none;
`
