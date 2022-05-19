import moment from 'moment'
import { useEffect } from 'react'
import TextAreaActions from '../../components/TextAreaActions'
import { useNotepadContext } from '../../contexts/notepad-context'
import useNoteHistory from '../../logic/NoteHistory/useNoteHistory'
import NotepadHeader from './components/NotepadHeader'
import NoteTaking from './components/NoteTaking'
import {
  FixedWrapperNoteTakingActions,
  VirtualNotePadContainer,
  WrapperNoteTaking,
} from './style'

const VirtualNotePad: React.FC = () => {
  const { existsNoteHistory, addOrUpdateCookieNoteHistory } = useNoteHistory();
  const { mobileOpenedActionButtons, notepadProtection, notepadSlug } = useNotepadContext()

  useEffect(() => {
    if (!!notepadSlug) {
      addOrUpdateCookieNoteHistory(notepadSlug, moment().toISOString(), notepadProtection || undefined);
    }
  }, [existsNoteHistory, notepadSlug, addOrUpdateCookieNoteHistory, notepadProtection])

  return (
    <VirtualNotePadContainer>
      <NotepadHeader />
      <WrapperNoteTaking>
        <NoteTaking />
      </WrapperNoteTaking>
      <FixedWrapperNoteTakingActions opened={mobileOpenedActionButtons}>
        <TextAreaActions />
      </FixedWrapperNoteTakingActions>
    </VirtualNotePadContainer>
  )
}

export default VirtualNotePad
