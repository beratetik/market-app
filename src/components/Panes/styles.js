import styled from 'styled-components'

export const PanesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 296px;
  min-width: 274px;
  width: 100%;

  @media (max-width: 768px) {
    min-width: 250px;
  }
`

export const PanesStickyWrapper = styled.div`
  position: sticky;
  top: 100px;
`
