import styled from 'styled-components'

export const ImageWrapper = styled.img`
  width: ${({ width }) => width}px;
  height: ${({ height}) => height}px;

  transform: rotate(${({ reverse }) => reverse ? -180 : 0}deg);
  padding: ${({ padding }) => padding}px;
  user-select: none;
`
