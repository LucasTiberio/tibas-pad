export interface iUseNotepadIALogic {
  performIA: (
    inputValue: string,
    onFinishPerform?: (finalValue: string) => void
  ) => Promise<string>
  update: boolean
}
