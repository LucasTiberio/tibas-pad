import { useRouter } from "next/router";
import { useState } from "react";
import { Container, NotepadEntryPointInput } from "./style";

const NotepadEntryPointForm = () => {
  const [targetNotepadName, setTargetNotepadName] = useState('');
  const router = useRouter();

  const handleGoToTargetText = () => {
    router.push(`/${targetNotepadName}`)
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