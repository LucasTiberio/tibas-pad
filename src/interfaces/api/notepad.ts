import { GetResponse } from './common'

export interface iNotepad {
  id?: string
  name: string
  protection?: string;
  content: string
}

export type GetNotepadResponse = GetResponse<iNotepad>
