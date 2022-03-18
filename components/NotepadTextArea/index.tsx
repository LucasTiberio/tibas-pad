import { useEffect } from 'react'
import { Textarea, TextAreaContainer } from './style'
import useNotepadTextAreaLogic from './logic'
import getNotepadText from '../../services/get-notepad-text'

const NotepadTextArea = (): JSX.Element => {
  const { textAreaValue, setTextAreaValue, handleTextAreaChange } =
    useNotepadTextAreaLogic()

  useEffect(() => {
    ;(async () => {
      const notepad = await getNotepadText()
      if (notepad?.data?.content) setTextAreaValue(notepad?.data?.content)
    })()
  }, [setTextAreaValue])

  return (
    <TextAreaContainer>
      <Textarea
        value={textAreaValue}
        onChange={(e) => {
          handleTextAreaChange(e.target.value)
        }}
      />
    </TextAreaContainer>
  )
}

export default NotepadTextArea
