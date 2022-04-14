import { useCallback, useEffect, useState } from 'react'
import { useNotepadContext } from '../../contexts/notepad-context'
import { useNotepadIALogic } from '../../logic/NotepadIA'
import useDebounce from '../../logic/useDebounce'
import sendPusherNotepad from '../../services/send-pusher-notepad'
import setNotepadText from '../../services/set-notepad-text'
import { iUseNotepadTextAreaLogic } from './interface'

const useNotepadTextAreaLogic = (): // params?: any,
// refs?: React.RefObject<unknown>[]
iUseNotepadTextAreaLogic => {
  const [textAreaValue, setTextAreaValue] = useState('')
  const debounceTextAreaValue = useDebounce(textAreaValue, 1500)
  const { setLoadingSetNotepad } = useNotepadContext()
  const { performIA, update } = useNotepadIALogic()

  const setNotepadTextAtDB = useCallback(async () => {
    if (!debounceTextAreaValue) return
    setLoadingSetNotepad(true)

    const _setNotepadTextAtDB = await setNotepadText(`${debounceTextAreaValue}`)

    if (!_setNotepadTextAtDB) console.error('couldnt setnotepadtextatdb')
    setLoadingSetNotepad(false)
  }, [setLoadingSetNotepad, debounceTextAreaValue])

  useEffect(() => {
    setNotepadTextAtDB()
    // sendPusherNotepad(`${debounceTextAreaValue}`)
  }, [debounceTextAreaValue, setNotepadTextAtDB])

  const handleTextAreaChange = async (textAreaChangeValue: string) => {
    console.log('aquiii')
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