import Image from 'next/image'
import styled from 'styled-components'
import { iLogo } from './interface'

export const ImageContainer = styled.div`
  img {
    border-radius: 100%;
  }
`

export const StyledImage = styled(Image) <iLogo>`
  width: ${({ width, size }) => width ? `${width}px` : size ? `${size}px` : '72px'};
  height: ${({ height, size }) => height ? `${height}px` : size ? `${size}px` : '72px'};
`