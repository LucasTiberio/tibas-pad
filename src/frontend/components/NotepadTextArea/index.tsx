import React, { useEffect, useMemo } from 'react'

import useNotepadTextAreaLogic from './logic'
import getNotepadText from '../../services/get-notepad-text'
import { useNotepadContext } from '../../contexts/notepad-context'
import { WritableDiv } from './style'
import { useRouter } from 'next/router'
// import { pusherSubscription } from '../../pages/api/_middleware'

const NotepadTextArea = (): JSX.Element => {
  const { query } = useRouter();
  const { setLoadingGetNotepad, loadingGetNotepad, setNotepadProtection } = useNotepadContext()
  const notepadSlug = useMemo(() => query?.slug ? `${query?.slug}` : '', [query?.slug]);

  const { textAreaValue, setTextAreaValue, handleTextAreaChange } =
    useNotepadTextAreaLogic({
      notepadName: notepadSlug,
    })

  useEffect(() => {
    (async () => {
      setLoadingGetNotepad(true)

      const notepad = await getNotepadText(notepadSlug || 'main')
      if (notepad?.data?.content) setTextAreaValue(notepad?.data?.content)
      if (notepad?.data?.protection) setNotepadProtection(notepad?.data?.protection)
      else setNotepadProtection('')

      setLoadingGetNotepad(false)
    })()
  }, [setTextAreaValue, setLoadingGetNotepad, setNotepadProtection, notepadSlug])

  return (
    <React.Fragment>
      <WritableDiv
        html={textAreaValue}
        spellCheck={false}
        disabled={loadingGetNotepad}
        onChange={(e) => {
          handleTextAreaChange(e.target.value)
        }}
      />
    </React.Fragment>
  )
}

export default NotepadTextArea
