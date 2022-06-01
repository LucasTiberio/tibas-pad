import Logo from '../../../../components/Logo'
import { useNotepadContext } from '../../../../contexts/notepad-context'
import useNoteHistory from '../../../../logic/NoteHistory/useNoteHistory'
import useNoteNavigate from '../../../../logic/useNoteNavigate'
import {
  Container,
  HeaderContentWrapper,
  HeaderTitleWrapper,
  ShadowBackground,
  FixedLayout,
  HeaderNoteHistorySelect,
} from './style'

export const NOTEPAD_HEADER_HEIGHT = '16vh'

const NotepadHeader: React.FC = () => {
  const { loadingSetNotepad, loadingGetNotepad, notepadSlug } = useNotepadContext()
  const { getAllNoteHistory } = useNoteHistory();
  const { go } = useNoteNavigate()

  const handleSelectChangeNoteHistory = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = evt.currentTarget;
    go(value)
  }

  return (
    <FixedLayout>
      <ShadowBackground>
        <Container>
          <HeaderTitleWrapper>
            <Logo isLoading={loadingSetNotepad || loadingGetNotepad} />
          </HeaderTitleWrapper>

          <HeaderContentWrapper>
            Bloco /{notepadSlug}
            {/* <HeaderNoteHistorySelect value={notepadSlug} onChange={handleSelectChangeNoteHistory}>
              {getAllNoteHistory.map(noteHistory =>
                <option
                  key={noteHistory.note_name}
                  value={noteHistory.note_name}
                >
                  {noteHistory.note_name}
                </option>
              )}
            </HeaderNoteHistorySelect> */}
          </HeaderContentWrapper>
        </Container>
      </ShadowBackground>
    </FixedLayout>
  )
}

export default NotepadHeader
