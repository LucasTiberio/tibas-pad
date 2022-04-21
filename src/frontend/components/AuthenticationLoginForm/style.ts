import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: 300px;
  margin: auto auto;
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 48px;
`

const LoginButtonCss = css`
  outline: 0;
  border: 0;

  margin: auto;

  width: 68px;
  height: 68px;

  cursor: pointer;
`

export const LoginOption = styled.button`
  ${LoginButtonCss}

  background: transparent;
  border: 2px solid #91003e;
  border-radius: 3px;

  &:active,
  &:hover {
    background: #91003e;
    color: #fff;
  }

  &:focus {
    background: transparent;
    color: black;
  }

  transition: all 0.2s linear;
`

export const LoginSubmit = styled.button`
  ${LoginButtonCss}
  position: relative;

  margin-top: 16px;
  width: 100%;

  font-size: 24px;

  background: transparent;
  border: 2px solid #91003e;
  border-radius: 4px;
`

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 42px;

  font-family: sans-serif;
  font-size: 28px;
`
