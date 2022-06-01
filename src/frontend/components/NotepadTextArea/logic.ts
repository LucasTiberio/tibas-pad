import { useCallback, useEffect } from 'react'
import { useNotepadContext } from '../../contexts/notepad-context'
import { useNotepadIALogic } from '../../logic/NotepadIA'
import useDebounce from '../../logic/useDebounce'
// import sendPusherNotepad from '../../services/send-pusher-notepad'
import setNotepadText from '../../services/set-notepad-text'
import { iUseNotepadTextAreaLogic } from './interface'

const useNotepadTextAreaLogic = (): iUseNotepadTextAreaLogic => {
  const { setLoadingSetNotepad, loadingGetNotepad, notepadSlug, notepadTextValue, setNotepadTextValue } = useNotepadContext()
  const debounceTextAreaValue = useDebounce(notepadTextValue, 2000)
  const { performIA, update } = useNotepadIALogic()

  const setNotepadTextAtDB = useCallback(async (notepadName: string) => {
    if (!debounceTextAreaValue) return
    setLoadingSetNotepad(true)

    const _setNotepadTextAtDB = await setNotepadText(`${notepadName}`, {
      content: `${debounceTextAreaValue}`,
    })

    if (!_setNotepadTextAtDB) console.error('couldnt setnotepadtextatdb')
    setLoadingSetNotepad(false)
  }, [setLoadingSetNotepad, debounceTextAreaValue])

  useEffect(() => {
    if (loadingGetNotepad) return;
    if (notepadSlug) setNotepadTextAtDB(notepadSlug)
    // sendPusherNotepad(`${debounceTextAreaValue}`)
  }, [debounceTextAreaValue, setNotepadTextAtDB, loadingGetNotepad, notepadSlug])

  const handleTextAreaChange = async (textAreaChangeValue: string) => {
    const textAreaValueWithIAPerform = await performIA(textAreaChangeValue)
    setNotepadTextValue(textAreaValueWithIAPerform)
  }

  return {
    handleTextAreaChange,
    update,
  }
}

export default useNotepadTextAreaLogic
