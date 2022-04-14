import React, { useEffect } from 'react'

import useNotepadTextAreaLogic from './logic'
import getNotepadText from '../../services/get-notepad-text'
import { useNotepadContext } from '../../contexts/notepad-context'
import { WritableDiv } from './style'
// import { pusherSubscription } from '../../pages/api/_middleware'

const NotepadTextArea = (): JSX.Element => {
  const { textAreaValue, setTextAreaValue, handleTextAreaChange } =
    useNotepadTextAreaLogic()
  const { setLoadingGetNotepad } = useNotepadContext()

  useEffect(() => {
    ;(async () => {
      setLoadingGetNotepad(true)

      const notepad = await getNotepadText()
      if (notepad?.data?.content) setTextAreaValue(notepad?.data?.content)

      setLoadingGetNotepad(false)
    })()
  }, [setTextAreaValue, setLoadingGetNotepad])

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
