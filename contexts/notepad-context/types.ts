export type NotepadContextType = {
  loadingSetNotepad: boolean
  setLoadingSetNotepad: (loading: boolean) => void
  loadingGetNotepad: boolean
  setLoadingGetNotepad: (loading: boolean) => void
}

export const dummyContext: NotepadContextType = {
  loadingSetNotepad: false,
  setLoadingSetNotepad: () => false,
  loadingGetNotepad: false,
  setLoadingGetNotepad: () => false,
}
