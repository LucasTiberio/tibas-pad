export interface GET_NOTEPAD_TEXT_NOTE {
  id?: string
  title?: string
  content: string
}

export interface GET_NOTEPAD_TEXT_RESPONSE {
  notes: GET_NOTEPAD_TEXT_NOTE[]
}

export type SET_NOTEPAD_TEXT_RESPONSE = boolean
