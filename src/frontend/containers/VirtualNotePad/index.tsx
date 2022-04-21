import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
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
  const { query } = useRouter();
  const notepadSlug = useMemo(() => query?.slug ? `${query?.slug}` : '', [query?.slug]);
  const { hasOneNoteHistory, addNoteHistoryCookie } = useNoteHistory();
  const { mobileOpenedActionButtons } = useNotepadContext()

  useEffect(() => {
    if (!!notepadSlug && !hasOneNoteHistory(notepadSlug)) {
      addNoteHistoryCookie(notepadSlug, '');
    }
  }, [hasOneNoteHistory, notepadSlug, addNoteHistoryCookie])

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
