export interface iNoteHistory {
  note_name: string;
  note_updated_at?: string;
  note_protection?: string;
}

export interface iLocalStorageAuthentication {
  expiresAtIso: string;
  notepadName: string;
  value: string;
}