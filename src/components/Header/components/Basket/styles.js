import styled from 'styled-components'

import { palette } from '../../../../shared/styles'

export const BasketContainer = styled.div`
  height: 100%;
  background-color: ${palette.darkBlue};
  position: absolute;
  right: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;

  @media (max-width: 500px) { 
    right: 0;
  }
`

export const BasketWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

export const Price = styled.span`
  color: ${({ color}) => color || palette.blue};
  font-size: 14px;
  font-family: 'Open Sans SemiBold';
  font-weight: 600;
  line-height: 18px;
  margin-left: 8px;
  letter-spacing: 0.16px;
  margin-bottom: 2px;
  
  @media (max-width: 500px) {
    display: none;
  }
`
