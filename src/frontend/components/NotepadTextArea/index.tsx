import React, { useEffect } from 'react'

import useNotepadTextAreaLogic from './logic'
import getNotepadText from '../../services/get-notepad-text'
import { useNotepadContext } from '../../contexts/notepad-context'
import { WritableDiv } from './style'
// import { pusherSubscription } from '../../pages/api/_middleware'

const NotepadTextArea = (): JSX.Element => {
  const { setLoadingGetNotepad, loadingGetNotepad, setNotepadProtection, notepadSlug, notepadTextValue, setNotepadTextValue } = useNotepadContext()

  const { handleTextAreaChange } = useNotepadTextAreaLogic()

  useEffect(() => {
    (async () => {
      if (!notepadSlug) return;
      setLoadingGetNotepad(true)

      const notepad = await getNotepadText(notepadSlug)
      if (notepad?.data?.content) setNotepadTextValue(notepad?.data?.content)
      if (notepad?.data?.protection) setNotepadProtection(notepad?.data?.protection)
      else setNotepadProtection('')

      setLoadingGetNotepad(false)
    })()
  }, [notepadSlug, setLoadingGetNotepad, setNotepadTextValue, setNotepadProtection])

  return (
    <React.Fragment>
      <WritableDiv
        html={notepadTextValue}
        spellCheck={false}
        disabled={loadingGetNotepad}
        // onKeyUp={(e) => {
        //   handleTextAreaChange(e.currentTarget.innerHTML)
        // }}
        onChange={(e) => {
          handleTextAreaChange(e.target.value)
        }}
      />
    </React.Fragment>
  )
}

export default NotepadTextArea
