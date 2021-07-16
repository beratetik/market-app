import styled, { css } from 'styled-components'

import { palette } from '../../../../shared/styles'


export const BoxWrapper = styled.div`
  background: ${palette.white};
  padding: 24px 24px 24px 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 2px;
  box-shadow: 0px 6px 24px 0px rgba(93, 62, 188, 0.04);
  margin: 12px 0  24px;  
  height: 244px;
`

export const Title = styled.span`
  font-size: 13px;
  font-family: 'Open Sans';
  font-weight: 600;
  line-height: 18px;
  text-align: left; 
  color: ${palette.leftPaneTitleColor};
`
