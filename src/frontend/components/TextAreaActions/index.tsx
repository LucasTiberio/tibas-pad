import { useRouter } from 'next/router'
import React from 'react'
import { useNotepadContext } from '../../contexts/notepad-context'
import TextAreaActionButton from '../TextAreaActionButton'
import { Container } from './style'

const TextAreaActions = (): JSX.Element => {
  const router = useRouter();
  const { setMobileOpenedActionButtons, mobileOpenedActionButtons } =
    useNotepadContext()

  const handleGoToHomepage = () => router.push('/')

  const handleCloseMobileActionButtons = () =>
    setMobileOpenedActionButtons(false)
  const handleOpenMobileActionButtons = () => setMobileOpenedActionButtons(true)

  return (
    <Container>
      <TextAreaActionButton
        name="<"
        onClick={handleOpenMobileActionButtons}
        show={mobileOpenedActionButtons}
        mobileOnly
      />

      <TextAreaActionButton name={`<| Voltar`} onClick={handleGoToHomepage} />

      <TextAreaActionButton name="B" cmd="bold" />

      <TextAreaActionButton name="I" cmd="italic" />

      <TextAreaActionButton
        name=">"
        onClick={handleCloseMobileActionButtons}
        mobileOnly
      />
    </Container>
  )
}

export default TextAreaActions
