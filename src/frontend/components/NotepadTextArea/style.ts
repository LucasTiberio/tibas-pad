import styled from 'styled-components'
import ContentEditable from 'react-contenteditable'

export const WritableDiv = styled(ContentEditable)`
  width: 100%;
  height: 100%;

  border: 0;
  outline: 0;

  /* white-space: pre; */
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
`
