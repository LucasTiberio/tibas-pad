import Image from 'next/image'
import { useMemo, useState } from 'react'
import { iLogo } from './interface'
import { ImageContainer } from './style'

const OwlGifFirstFrame = '/images/owl-gif-first-frame.png'
const OwlGif = '/images/owl-gif.gif'

const Logo = ({ isLoading }: iLogo): JSX.Element => {
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
      <Image alt="Tibas Logo" src={imageSourceBasedOnLifecycle} width={76} height={76} />
    </ImageContainer>
  )
}

export default Logo
