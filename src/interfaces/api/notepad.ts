import { GetResponse } from './common'

export interface iNotepad {
  id?: string
  name: string
  content: string
}

export type GetNotepadResponse = GetResponse<iNotepad>
