import styled from 'styled-components'
import { iLogo } from './interface'

export const ImageContainer = styled.div<iLogo>`
  ${({ isLoading }) =>
    isLoading &&
    `
    -moz-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    transform: scaleX(-1);
    -ms-filter: fliph; /*IE*/
    filter: fliph; /*IE*/
    `}
  transition: all 0.2s linear;
`
