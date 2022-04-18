import { useCallback, useEffect, useState } from 'react'
import { useNotepadContext } from '../../contexts/notepad-context'
import { useNotepadIALogic } from '../../logic/NotepadIA'
import useDebounce from '../../logic/useDebounce'
// import sendPusherNotepad from '../../services/send-pusher-notepad'
import setNotepadText from '../../services/set-notepad-text'
import { iUseNotepadTextAreaLogic, iUseNotepadTextAreaLogicRefs } from './interface'

const useNotepadTextAreaLogic = (refs: iUseNotepadTextAreaLogicRefs): iUseNotepadTextAreaLogic => {
  const [textAreaValue, setTextAreaValue] = useState('')
  const debounceTextAreaValue = useDebounce(textAreaValue, 1500)
  const { setLoadingSetNotepad } = useNotepadContext()
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
    if (refs?.notepadName) setNotepadTextAtDB(refs?.notepadName)
    // sendPusherNotepad(`${debounceTextAreaValue}`)
  }, [debounceTextAreaValue, setNotepadTextAtDB, refs?.notepadName])

  const handleTextAreaChange = async (textAreaChangeValue: string) => {
    const textAreaValueWithIAPerform = await performIA(textAreaChangeValue)
    setTextAreaValue(textAreaValueWithIAPerform)
  }

  return {
    textAreaValue,
    setTextAreaValue,
    handleTextAreaChange,
    update,
  }
}

export default useNotepadTextAreaLogic
