import { useRouter } from 'next/router'
import { useMemo } from 'react'
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
  const { query } = useRouter();
  const notepadSlug = useMemo(() => `${query?.slug}`, [query?.slug]);
  const { loadingSetNotepad, loadingGetNotepad } = useNotepadContext()

  return (
    <FixedLayout>
      <ShadowBackground>
        <Container>
          <HeaderTitleWrapper>
            <Logo isLoading={loadingSetNotepad || loadingGetNotepad} />
          </HeaderTitleWrapper>

          <HeaderContentWrapper>Bloco /{notepadSlug}</HeaderContentWrapper>
        </Container>
      </ShadowBackground>
    </FixedLayout>
  )
}

export default NotepadHeader
