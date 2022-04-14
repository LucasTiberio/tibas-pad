export type NotepadContextType = {
  loadingSetNotepad: boolean
  setLoadingSetNotepad: (loading: boolean) => void
  loadingGetNotepad: boolean
  setLoadingGetNotepad: (newLoadingGetNotepad: boolean) => void
  mobileOpenedActionButtons: boolean
  setMobileOpenedActionButtons: (newMobileOpenedActionButtons: boolean) => void
}

export const dummyContext: NotepadContextType = {
  loadingSetNotepad: false,
  setLoadingSetNotepad: () => false,
  loadingGetNotepad: false,
  setLoadingGetNotepad: () => false,
  mobileOpenedActionButtons: false,
  setMobileOpenedActionButtons: () => false,
}
