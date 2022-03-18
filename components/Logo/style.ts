import styled from 'styled-components'
import { iLogo } from './interface'

export const ImageContainer = styled.div<iLogo>`
  ${({ isLoading }) =>
    isLoading &&
    `
    -webkit-transform: rotate(360deg);
    -webkit-transition-duration: 1s;
    -webkit-transition-delay: now;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
  `}
`
