import NotepadTextArea from '../../../../components/NotepadTextArea'
import { Container, MaxWidthContainer } from './style'

const NoteTaking = (): JSX.Element => {
  return (
    <MaxWidthContainer>
      <Container>
        <NotepadTextArea />
      </Container>
    </MaxWidthContainer>
  )
}

export default NoteTaking
