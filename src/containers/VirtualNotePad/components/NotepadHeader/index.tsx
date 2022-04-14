import Logo from '../../../../components/Logo'
import { useNotepadContext } from '../../../../contexts/notepad-context'
import {
  Container,
  HeaderContentWrapper,
  HeaderTitleWrapper,
  ShadowBackground,
  FixedLayout,
} from './style'

export const NOTEPAD_HEADER_HEIGHT = '12vh'

const NotepadHeader: React.FC = () => {
  const { loadingSetNotepad, loadingGetNotepad } = useNotepadContext()

  return (
    <FixedLayout>
      <ShadowBackground>
        <Container>
          <HeaderTitleWrapper>
            <Logo isLoading={loadingSetNotepad || loadingGetNotepad} />
          </HeaderTitleWrapper>

          <HeaderContentWrapper>Bloco de Notas</HeaderContentWrapper>
        </Container>
      </ShadowBackground>
    </FixedLayout>
  )
}

export default NotepadHeader
