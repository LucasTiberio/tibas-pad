import styled from 'styled-components'

export const HeightAndMaxWidthContainer = styled.div`
  height: -webkit-fill-available;
  max-width: 90vw;
  margin: 0 auto;
  
  /* @media screen and (max-width: 1024px) {
    max-width: 70vh;
  } */

  @media screen and (max-width: 768px) {
    max-width: 95vw;
  }
`
