import React, { createContext, useState } from 'react'

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

  return (
    <NotepadContext.Provider
      value={{
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
