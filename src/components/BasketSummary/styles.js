import styled from 'styled-components'

import { palette } from '../../shared/styles'

export const BasketSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 296px;
  min-width: 250px;
  width: 100%;

  @media (max-width: 1200px) {
    display: none;
  }
`

export const BasketWrapper = styled.div`
  padding: 24px;
  border: 8px solid ${palette.blue};
  background: ${palette.white};
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  position: sticky;
  top: 100px;
` 

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 2px;
  max-height: 400px;
  overflow: auto;
`

export const Total = styled.div`
  border-radius: 2px;
  border: 2px solid ${palette.blue};
  font-size: 14px;
  font-family: 'Open Sans';
  font-weight: 600;
  line-height: 16px;
  padding: 16px 22px;
  color: ${palette.blue};
  margin-top: 16px;
  align-self: flex-end;
`

export const EmptyBasket = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 18px;
  color: ${palette.pageTitleColor};
  height: 130px;
  user-select: none;
`
