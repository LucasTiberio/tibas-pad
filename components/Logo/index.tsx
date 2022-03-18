import Image from 'next/image'
import { iLogo } from './interface'
import { ImageContainer } from './style'

const Logo = ({ isLoading }: iLogo): JSX.Element => {
  return (
    <ImageContainer isLoading={isLoading}>
      <Image alt="Tibas Logo" src="/logo.png" width={54} height={54} />
    </ImageContainer>
  )
}

export default Logo
