import styled from 'styled-components'

import { palette } from '../../styles'

export const LoadingWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${palette.leftPaneItemColor};
    padding-right: ${({ inside }) => inside ? 6 : 0}px;
`
