import { useEffect } from 'react'
import { Textarea, TextAreaContainer } from './style'
import useNotepadTextAreaLogic from './logic'
import getNotepadText from '../../services/get-notepad-text'
import { useNotepadContext } from '../../contexts/notepad-context'

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
