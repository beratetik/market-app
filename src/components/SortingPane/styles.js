import styled from 'styled-components'

import { palette } from '../../shared/styles'

import tickIcon from '../../assets/icons/tick.svg'

export const PaneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 296px;
  min-width: 190px;
  width: 100%;
`

export const BoxWrapper = styled.div`
  background: ${palette.white};
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 2px;
  box-shadow: 0px 6px 24px 0px rgba(93, 62, 188, 0.04);
  margin-top: 12px;
  margin-bottom: 24px;
`

export const Title = styled.span`
  font-size: 13px;
  font-family: 'Open Sans';
  font-weight: 600;
  line-height: 18px;
  text-align: left; 
  color: ${palette.leftPaneTitleColor};
`

export const SelectItem = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;  
  letter-spacing: 0.16px;
  display: flex;
  align-items: center;

  * {
    cursor: pointer
  }
  
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`

export const Label = styled.label`
  font-family: 'Open Sans';
  margin-left: 12px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  font-weight: 400;
  color: ${palette.paneItemColor};
`

export const Input = styled.input`
  ${({ type }) => type === 'radio' && `
    margin: 0;
    width: 22px;
    height: 22px;
    min-width: 22px;
    appearance: none;
    border: 2px solid #DFDEE2;
    border-radius: 50%;
  `}

  ${({ type, checked }) =>  type === 'radio' && checked && `
    border: 2px solid ${palette.blue};

    &:after {
      content: '';
      width: 18px;
      background: url(${tickIcon}) no-repeat;
      background-position: center;
      position: absolute;
      height: 18px;
    }
  `}
`
