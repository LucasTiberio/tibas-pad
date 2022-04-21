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
  getAllNoteHistoryCookie: () => iCookieNoteHistory[];
  getOneNoteHistoryCookie: (name: string) => iCookieNoteHistory | undefined
  removeNoteHistoryCookie: (name: string) => void;
  resetNoteHistoryCookie: () => void;
  addNoteHistoryCookie: (name: string, updated_at: string, protection?: string) => void;
  hasOneNoteHistory: (noteHistoryName: string) => boolean;
}