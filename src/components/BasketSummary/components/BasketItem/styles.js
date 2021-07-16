import styled from 'styled-components'

import { palette } from '../../../../shared/styles'

export const BasketItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 18px 0;
  border-bottom: 1px solid ${palette.darkGray};

  &:first-of-type {
    padding-top: 0;
  }
`

export const ProductName = styled.span`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  font-family: 'Open Sans';
  letter-spacing: 0.16px;
  color: ${palette.itemTextColor};
`

export const Price = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-family: 'Open Sans';
  font-weight: 600;
  letter-spacing: 0.16px;
  color: ${palette.blue};
  margin: 4px 0 0 0;
`

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  user-select: none;
  height: 32px;
  width: 32px;
`

export const Count = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 20.43px;
  width: 32px;
  height: 32px;
  background-color: ${palette.blue};
  color: ${palette.white};
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  width: 10px;
  height: 10px;
`

export const ProductDetails = styled.div``
