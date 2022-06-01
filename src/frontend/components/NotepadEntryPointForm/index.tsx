import moment from "moment";
import { useState } from "react";
import useNoteHistory from "../../logic/NoteHistory/useNoteHistory";
import useNoteNavigate from "../../logic/useNoteNavigate";
import { Container, NotepadEntryPointInput } from "./style";

const NotepadEntryPointForm = () => {
  const [targetNotepadName, setTargetNotepadName] = useState('');
  const { go } = useNoteNavigate()
  const { addOrUpdateCookieNoteHistory } = useNoteHistory();

  const handleGoToTargetText = () => {
    go(targetNotepadName)
    addOrUpdateCookieNoteHistory(targetNotepadName, moment().toISOString())
  }

  const handleNotepadTargetNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTargetNotepadName(evt.target.value)
  }

  return (
    <Container>
      <p>notes.tibas.club/</p>
      <NotepadEntryPointInput onChange={handleNotepadTargetNameChange} type="text" />
      <button onClick={handleGoToTargetText}>go</button>
    </Container>
  )
}

export default NotepadEntryPointForm;