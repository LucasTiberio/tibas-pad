export interface iNoteHistory {
  note_name: string;
  note_updated_at?: string;
  note_protection?: string;
}

export type iNoteHistoryUsage = 'COOKIE' //| 'DATABASE'

export interface iAuthentication {
  expiresAtIso: string;
  notepadName: string;
  value: string;
}

export type iUserNoteTabs = string[]

export interface iUseNoteHistory {
  getAllNoteHistory: iNoteHistory[];
  getOneNoteHistory: (name: string) => iNoteHistory | undefined
  removeNoteHistory: (name: string) => void;
  resetNoteHistory: () => void;
  addOrUpdateCookieNoteHistory: (name: string, updated_at: string, protection?: string) => void;
  addNoteHistory: (name: string, updated_at: string, protection?: string) => void;
  existsNoteHistory: (noteHistoryName: string) => boolean;
}