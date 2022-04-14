export interface iUseNotepadTextAreaLogic {
  textAreaValue: string
  setTextAreaValue: (textAreaValue: string) => void
  handleTextAreaChange: (value: string) => void
  update: boolean
}