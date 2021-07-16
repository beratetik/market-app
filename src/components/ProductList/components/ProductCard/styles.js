import styled from 'styled-components'

import { palette } from '../../../../shared/styles'

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  align-items: center;
  justify-content: space-between;
`

export const ProductImageWrapper  = styled.div`
  display: flex;
  flex-direction: column;  
  width: 124px;
  height: 124px;
  box-shadow: 0 0 0 1.76px ${palette.darkGray};
  border-radius: 12px;
`

export const ProductDetailsWrapper = styled.div`
  padding: 8px 0;
  flex: 1;
`

export const Price = styled.p`
  margin: 0;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: ${palette.blue};
`

export const ProductName = styled.span`
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 600; 
  line-height: 20px;
  color: ${palette.itemTextColor};
`

export const AddBasketButton = styled.input`
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  color: ${palette.white};
  background-color: ${palette.blue};
  height: 22px;
  border-radius: 2px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
`
