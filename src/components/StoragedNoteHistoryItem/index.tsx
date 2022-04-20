import { useRouter } from "next/router";
import { useState } from "react";
import { iStoragedNoteHistoryItem } from "./interface";
import { Container, NoteGoButton, NoteName, NoteUpdatedAt, Wrapper } from "./style";

const StoragedNoteHistoryItem = ({
  name,
  updatedAt,
}: iStoragedNoteHistoryItem): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGoToNote = (): void => {
    if (loading) return
    setLoading(true)
    router.push(`/${name}`)
  };

  return (
    <Container onClick={handleGoToNote}>
      <Wrapper flex={1}>
        <NoteName>{name}</NoteName>
        <NoteUpdatedAt>{updatedAt || 'Ontem a noite'}</NoteUpdatedAt>
      </Wrapper>
      <Wrapper>
        <NoteGoButton>
          {!loading && '||>'}
        </NoteGoButton>
      </Wrapper>
    </Container>
  )
}

export default StoragedNoteHistoryItem;