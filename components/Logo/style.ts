import styled from 'styled-components'
import { iLogo } from './interface'

export const ImageContainer = styled.div<iLogo>`
  line-height: 100px;

  ${({ isLoading }) =>
    isLoading &&
    `
    -webkit-transform: rotate(1080deg);
    -webkit-transition-duration: 3.5s;
    -webkit-transition-delay: now;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
  `}
`
