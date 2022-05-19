import moment from "moment";
import { useMemo, useState } from "react";
import useNoteHistory from "../../logic/NoteHistory/useNoteHistory";
import useNoteNavigate from "../../logic/useNoteNavigate";
import { iStoragedNoteHistoryItem } from "./interface";
import { Container, NoteDeleteButton, NoteGoButton, NoteName, ActionsWrapper, NoteUpdatedAt, NoteInformationsWrapper } from "./style";

const StoragedNoteHistoryItem = ({
  name,
  updatedAt,
}: iStoragedNoteHistoryItem): JSX.Element => {
  const { removeNoteHistory } = useNoteHistory()
  const [loading, setLoading] = useState(false);
  const { go } = useNoteNavigate()

  const updatedAtFormated = useMemo(() => {
    let _updatedAtFormated = ''
    const updatedAtMoment = moment(updatedAt);
    const nowMoment = moment();

    // Add updated Day
    if (updatedAtMoment.isSame(nowMoment, 'd')) _updatedAtFormated += 'Hoje'
    else if (updatedAtMoment.diff(nowMoment, 'd') < 1) _updatedAtFormated += 'Ontem'
    else _updatedAtFormated += `Dia ${updatedAtMoment.format('DD')}`

    // Add updated Month
    if (updatedAtMoment.diff(nowMoment, 'm') > 1) {
      const month = updatedAtMoment.format('MMMM');
      const monthWithFirstLetterUpperCase = month.charAt(0).toUpperCase() + month.slice(1)
      _updatedAtFormated += ` de ${monthWithFirstLetterUpperCase}`
    }

    return _updatedAtFormated
  }, [updatedAt])

  const handleGoToNote = (): void => {
    if (loading) return
    setLoading(true)
    go(name)
  };

  const handleDeleteNote = (): void => {
    if (loading) return
    removeNoteHistory(name)
  };

  return (
    <Container>
      <NoteInformationsWrapper onClick={handleGoToNote}>
        <NoteName>{name}</NoteName>
        <NoteUpdatedAt>{updatedAtFormated}</NoteUpdatedAt>
      </NoteInformationsWrapper>
      <ActionsWrapper>
        <NoteDeleteButton onClick={handleDeleteNote}>
          {!loading && 'X'}
        </NoteDeleteButton>
        <NoteGoButton onClick={handleGoToNote}>
          {!loading && '||>'}
        </NoteGoButton>
      </ActionsWrapper>
    </Container>
  )
}

export default StoragedNoteHistoryItem;