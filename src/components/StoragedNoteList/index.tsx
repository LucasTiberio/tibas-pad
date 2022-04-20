import { useMemo, useState } from "react";
import { iNoteHistory } from "../../interfaces/logics";
import useNoteHistory from "../../logic/useNoteHistory";
import StoragedNoteHistoryItem from "../StoragedNoteHistoryItem";
import { iStoragedNoteList } from "./interface";
import { BottomFixedWrapper, Container, NoteHistoryListWrapper, ToggleNoteHistoryListWrapper } from "./style";

const StoragedNoteList = ({
  type = 'COOKIES'
}: iStoragedNoteList): JSX.Element | null => {
  const [openedList, setOpenedList] = useState(false);
  const { getAllNoteHistoryLocalStorage } = useNoteHistory();

  const STORAGE_DATA_LIST_BY_TYPE: iNoteHistory[] = useMemo(() => ({
    COOKIES: getAllNoteHistoryLocalStorage(),
    USERNAME_DB: [],
  }[type]), [type, getAllNoteHistoryLocalStorage])

  if (!STORAGE_DATA_LIST_BY_TYPE.length) return null

  const handleToggleNoteHistoryList = () => setOpenedList(prev => !prev);

  return (
    <Container>
      <NoteHistoryListWrapper opened={openedList}>
        {STORAGE_DATA_LIST_BY_TYPE.map((item, i) => <StoragedNoteHistoryItem
          key={`${item.note_name}-${i}`}
          name={item.note_name}
          hasProtection={!!item.note_protection}
          updatedAt={item.note_updated_at}
        />)}
      </NoteHistoryListWrapper>
      <BottomFixedWrapper opened={openedList}>
        <ToggleNoteHistoryListWrapper onClick={handleToggleNoteHistoryList}>
          {'<||'}
        </ToggleNoteHistoryListWrapper>
      </BottomFixedWrapper>
    </Container>
  )
}

export default StoragedNoteList;