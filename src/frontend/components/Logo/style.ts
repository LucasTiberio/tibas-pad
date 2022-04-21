import styled, { css } from 'styled-components'
import { iLogo } from './interface'

const animation = css`
  -moz-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  transform: scaleX(-1);

  -ms-filter: fliph; /*IE*/
  filter: fliph; /*IE*/
`

export const ImageContainer = styled.div<iLogo>`
  ${({ isLoading }) => isLoading && animation}

  &:hover {
    ${animation};
  }

  transition: all 0.2s linear;
  mix-blend-mode: multiply;
  padding: 8px;
`
