import styled from 'styled-components'

import { palette } from '../../shared/styles/index'

export const ProductListWrapper = styled.div``

export const ProductCardListWrapper = styled.div`
  border-radius: 2px;
  background-color: ${palette.white};
  display: grid;
  grid-template-columns: repeat(4,minmax(124px, 0));
  grid-gap: 20px 24px;
  padding: 20px;
  margin: 0 16px;
  height: 100%;

  ${({ currentList }) => !currentList?.length ? `
    display: flex;
    flex: 1;
    min-width: 608px;
  `: ''}

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(132px, 0));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(132px, 0));
    justify-content: space-around;
    margin-right: 0;
  }
`

export const BoxWrapper = styled.div`
  background: ${palette.white};
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 2px;
  box-shadow: 0px 6px 24px 0px #5D3EBC0A;
`

export const Title = styled.h2`
  margin: 0;
  padding: 0 16px;
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: ${palette.black};
`

export const PaginateWrapper = styled.div`
  .pagination {
    list-style-type: none;
    display: flex;
    align-items: center;
    background: transparent;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    border: none;

    a {
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      border: none;
      cursor: pointer;
      padding: 12px;
      border-radius: 2px;
      user-select: none;
    }
  }
  .dots > a{
    cursor: default;
  }
  .active {
    border-color: transparent;
    background-color: #0366d6;
    color: white;
  }
`

