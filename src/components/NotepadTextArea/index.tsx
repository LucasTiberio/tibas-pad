import React, { useEffect, useMemo } from 'react'

import useNotepadTextAreaLogic from './logic'
import getNotepadText from '../../services/get-notepad-text'
import { useNotepadContext } from '../../contexts/notepad-context'
import { WritableDiv } from './style'
import { useRouter } from 'next/router'
// import { pusherSubscription } from '../../pages/api/_middleware'

const NotepadTextArea = (): JSX.Element => {
  const { query } = useRouter();
  const notepadSlug = useMemo(() => `${query?.slug}`, [query?.slug]);
  const { textAreaValue, setTextAreaValue, handleTextAreaChange } =
    useNotepadTextAreaLogic({
      notepadName: notepadSlug,
    })
  const { setLoadingGetNotepad, setNotepadProtection } = useNotepadContext()

  useEffect(() => {
    (async () => {
      setLoadingGetNotepad(true)


      const notepad = await getNotepadText(notepadSlug || 'main')
      if (notepad?.data?.content) setTextAreaValue(notepad?.data?.content)
      if (notepad?.data?.protection) setNotepadProtection(notepad?.data?.protection)

      setLoadingGetNotepad(false)
    })()
  }, [setTextAreaValue, setLoadingGetNotepad, setNotepadProtection, notepadSlug])

  return (
    <React.Fragment>
      <WritableDiv
        html={textAreaValue} // innerHTML of the editable div
        // disabled={!this.state.editable} // use true to disable edition
        // onBlur={this.sanitize}
        onChange={(e) => {
          handleTextAreaChange(e.target.value)
        }}
      />
    </React.Fragment>
  )
}

export default NotepadTextArea
