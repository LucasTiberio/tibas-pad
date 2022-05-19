import { useMemo, useState } from 'react'
import { iLogo } from './interface'
import { ImageContainer, StyledImage } from './style'

const OwlGifFirstFrame = '/images/owl-gif-first-frame.png'
const OwlGif = '/images/owl-gif.gif'

const Logo = ({
  isLoading,
  height = 72,
  width = 72,
  size,
}: iLogo): JSX.Element => {
  const [doingAnimation, setDoingAnimation] = useState(false);

  const imageSourceBasedOnLifecycle = useMemo(() => {
    if (doingAnimation || isLoading) return OwlGif
    else return OwlGifFirstFrame
  }, [doingAnimation, isLoading]);

  const handleImageContainerMouseOver = (/** evt: React.MouseEvent<HTMLDivElement, MouseEvent> */) => {
    if (doingAnimation) return;

    setDoingAnimation(true);
    setTimeout(() => {
      setDoingAnimation(false);
    }, 3000)
  }

  return (
    <ImageContainer onMouseOver={handleImageContainerMouseOver}>
      <StyledImage
        alt="Tibas Logo"
        src={imageSourceBasedOnLifecycle}
        isLoading={isLoading}
        height={height || 72}
        width={width || 72}
        size={size}
      />
    </ImageContainer>
  )
}

export default Logo
