import styled from 'styled-components'

export const Textarea = styled.textarea`
  width: 100%;
  height: 100vh;

  border: 0;
  outline: 0;

  font-family: 'Fira Code', sans-serif;
  resize: none;

  background: transparent;

  @media screen and (max-height: 1080px) {
  }

  // Iphone X, Iphone XS, Iphone XR
  @media screen and (max-height: 896px) {
  }

  // Android, Iphone7+, Iphone 6+, Iphone 8+
  @media screen and (max-height: 736px) {
  }

  // Iphone 8, Iphone 7, Iphone 6
  @media screen and (max-height: 667px) {
  }

  padding-top: 110px;
`

export const TextAreaContainer = styled.div``
