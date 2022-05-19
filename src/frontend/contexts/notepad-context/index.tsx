import React, { createContext, useEffect, useState } from 'react'

import { NotepadContextType, dummyContext } from './types'

export const NotepadContext = createContext<NotepadContextType>(dummyContext)

export const useNotepadContext = (): NotepadContextType =>
  React.useContext(NotepadContext)

const NotepadContextProvider: React.FC = ({ children }) => {
  const [loadingSetNotepad, setLoadingSetNotepad] = useState(false)
  const [loadingGetNotepad, setLoadingGetNotepad] = useState(false)
  const [mobileOpenedActionButtons, setMobileOpenedActionButtons] =
    useState(false)
  const [notepadProtection, setNotepadProtection] = useState('');
  const [notepadTextValue, setNotepadTextValue] = useState('');
  const [notepadSlug, setNotepadSlug] = useState('');

  useEffect(() => {
    setNotepadSlug(window.location.pathname.slice(1, 20))
  }, [])

  return (
    <NotepadContext.Provider
      value={{
        notepadSlug,
        setNotepadSlug,
        notepadTextValue,
        setNotepadTextValue,
        notepadProtection,
        setNotepadProtection,
        loadingSetNotepad,
        setLoadingSetNotepad,
        loadingGetNotepad,
        setLoadingGetNotepad,
        mobileOpenedActionButtons,
        setMobileOpenedActionButtons,
      }}
    >
      {children}
    </NotepadContext.Provider>
  )
}

export default NotepadContextProvider
