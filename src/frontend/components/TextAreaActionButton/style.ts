import styled, { css } from 'styled-components'

export const ACTION_BUTTON_SIZE = '42px'

export const ActionButtonDefaultCss = css<{
  show?: boolean
  mobileOnly?: boolean
}>`
  width: ${({ show }) =>
    show !== undefined && show ? '0px' : ACTION_BUTTON_SIZE};
  height: ${() => ACTION_BUTTON_SIZE};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;

  background: rgba(51, 51, 51, 0.7);

  font-size: 16px;
  color: #ddd;

  visibility: ${({ show }) =>
    show !== undefined && show ? 'hidden' : 'visible'};

  cursor: pointer;

  @media screen and (min-width: 769px) {
    display: ${({ mobileOnly }) => (mobileOnly ? 'none' : 'block')};
  }
`

export const ActionButton = styled.button`
  ${ActionButtonDefaultCss}

  border-right: 2px solid rgba(51, 51, 51, 0.3);

  &:hover {
    background: rgba(51, 51, 51, 0.8);
  }

  transition: background 0.2s linear;

  &:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;

    border-right: 1px solid transparent;
  }
`
