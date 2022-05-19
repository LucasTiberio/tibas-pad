export type NotepadContextType = {
  loadingSetNotepad: boolean
  setLoadingSetNotepad: (loading: boolean) => void
  loadingGetNotepad: boolean
  setLoadingGetNotepad: (newLoadingGetNotepad: boolean) => void
  mobileOpenedActionButtons: boolean
  setMobileOpenedActionButtons: (newMobileOpenedActionButtons: boolean) => void
  notepadProtection?: string;
  setNotepadProtection: (newNotepadProtection: string) => void
  notepadSlug?: string;
  setNotepadSlug: (newNotepadSlug: string) => void
  notepadTextValue: string;
  setNotepadTextValue: (newNotepadTextValue: string) => void
}

export const dummyContext: NotepadContextType = {
  loadingSetNotepad: false,
  setLoadingSetNotepad: () => false,
  loadingGetNotepad: false,
  setLoadingGetNotepad: () => false,
  mobileOpenedActionButtons: false,
  setMobileOpenedActionButtons: () => false,
  notepadProtection: '',
  setNotepadProtection: () => false,
  notepadSlug: '',
  setNotepadSlug: () => false,
  notepadTextValue: '',
  setNotepadTextValue: () => false,
}
