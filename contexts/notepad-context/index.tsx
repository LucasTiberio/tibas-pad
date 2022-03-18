import React, { createContext, useState } from 'react'

import { NotepadContextType, dummyContext } from './types'

export const NotepadContext = createContext<NotepadContextType>(dummyContext)

export const useNotepadContext = (): NotepadContextType =>
  React.useContext(NotepadContext)

const NotepadContextProvider: React.FC = ({ children }) => {
  const [loadingSetNotepad, setLoadingSetNotepad] = useState<boolean>(false)

  return (
    <NotepadContext.Provider
      value={{
        loadingSetNotepad,
        setLoadingSetNotepad,
      }}
    >
      {children}
    </NotepadContext.Provider>
  )
}

export default NotepadContextProvider
