import styled, { css } from 'styled-components'

import { palette } from '../../../../../../shared/styles'

import blueTickIcon from '../../../../../../assets/icons/tick.svg'
import whiteTickIcon from '../../../../../../assets/icons/white-tick.svg'

import { typo } from '../../../../../../shared/styles'

export const SelectItem = styled.div`
  ${typo.text}
  display: flex;
  align-items: center;

  * {
    cursor: pointer
  }
  
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`

const commonStyles = css`
  margin: 0;
  width: 22px;
  height: 22px;
  min-width: 22px;
  appearance: none;
`

const radioButtonStyles = css`
  ${commonStyles}
  border: 2px solid #DFDEE2;
  border-radius: 50%;

  ${({ checked }) => checked && `
    border: 2px solid ${palette.blue};

    &:after {
      content: '';
      width: 18px;
      height: 18px;
      background: url(${blueTickIcon}) no-repeat;
      background-position: center;
      position: absolute;
    }
  `}
`

const checkboxButtonStyles = css`
  ${commonStyles}
  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
  border-radius: 2px;
  background: ${palette.white};
  position: relative;

  ${({ type, checked }) => type === 'checkbox' && checked && `
    background: ${palette.blue};
    
    &:after {
      content: '';
      width: 22px;
      height: 22px;
      background: url(${whiteTickIcon}) no-repeat;
      background-position: center;
      position: absolute;
      background-size: 11px;
    }
  `}
`

const textButtonStyles = css`
  width: 100%;
  height: 48px;
  border-radius: 2px;
  border: 2px solid #E0E0E0;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  color: ${palette.leftPaneItemColor};
  padding: 12px 16px;
  font-family: 'Inter';
  line-height: 24px;
  font-size: 14px;
  letter-spacing: 0.15px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${palette.leftPaneItemColor};
  }

  &:disabled {
    background: #DFDEE2;
  }
`

const InputTypes = {
  'radio': radioButtonStyles,
  'checkbox': checkboxButtonStyles,
  'text': textButtonStyles
}

export const Input = styled.input`
  ${({ type }) => InputTypes[type]}
`
