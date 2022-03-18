export type NotepadContextType = {
  loadingSetNotepad: boolean
  setLoadingSetNotepad: (loading: boolean) => void
}

export const dummyContext: NotepadContextType = {
  loadingSetNotepad: false,
  setLoadingSetNotepad: () => false,
}
