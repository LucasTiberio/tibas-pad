import Logo from '../../../../components/Logo'
import { useNotepadContext } from '../../../../contexts/notepad-context'
import {
  Container,
  HeaderContentWrapper,
  HeaderTitleWrapper,
  ShadowBackground,
  FixedLayout,
} from './style'

export const NOTEPAD_HEADER_HEIGHT = '122px'

const NotepadHeader: React.FC = () => {
  const { loadingSetNotepad, loadingGetNotepad } = useNotepadContext()

  return (
    <FixedLayout>
      <ShadowBackground>
        <Container>
          <HeaderTitleWrapper>
            <Logo isLoading={loadingSetNotepad || loadingGetNotepad} />
          </HeaderTitleWrapper>

          <HeaderContentWrapper>Note taking</HeaderContentWrapper>
        </Container>
      </ShadowBackground>
    </FixedLayout>
  )
}

export default NotepadHeader
