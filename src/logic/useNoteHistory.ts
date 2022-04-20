import { COOKIE_KEYS } from '../interfaces/next/cookieKeys'
import cookie from 'js-cookie'
import { iNoteHistory } from '../interfaces/logics'
import { useCallback } from 'react'

type iLocalStorageNoteHistory = iNoteHistory[]

const useNoteHistory = () => {
  const setEncryptedCookie = (stringfiedValue: string) => {
    const valueInBase64 = btoa(stringfiedValue);
    cookie.set(COOKIE_KEYS.NOTE_HISTORY, valueInBase64)
  }

  const cookieNote = cookie.get(COOKIE_KEYS.NOTE_HISTORY);

  const getAllNoteHistoryLocalStorage = useCallback((): iLocalStorageNoteHistory => {
    if (!cookieNote) return [];

    const cookiesBase64Decoded = atob(cookieNote)
    const cookiesParsed: iLocalStorageNoteHistory = JSON.parse(cookiesBase64Decoded)
    return cookiesParsed
  }, [cookieNote])

  const getOneNoteHistoryLocalStorage = (name: string): iNoteHistory | undefined => {
    const cookieNote = cookie.get(COOKIE_KEYS.NOTE_HISTORY);
    if (!cookieNote) return undefined;

    const cookiesBase64Decoded = atob(cookieNote)
    const cookiesParsed: iLocalStorageNoteHistory = JSON.parse(cookiesBase64Decoded)

    const noteHistoryByName = cookiesParsed.find(noteHistory => noteHistory.note_name === name);
    if (!noteHistoryByName) return undefined;

    return noteHistoryByName;
  }

  const addNoteHistoryLocalStorage = (name: string, updated_at: string, protection?: string) => {
    const newNoteHistory = [...getAllNoteHistoryLocalStorage()]
    newNoteHistory.push({
      note_name: name,
      note_updated_at: updated_at,
      note_protection: protection,
    })

    setEncryptedCookie(JSON.stringify(newNoteHistory))
  }

  const removeNoteHistoryLocalStorage = (name: string) => {
    const allNoteHistory = getAllNoteHistoryLocalStorage();
    const noteHistoryWithoutPayloadNote = allNoteHistory.filter(noteHistory => noteHistory.note_name !== name);
    setEncryptedCookie(JSON.stringify(noteHistoryWithoutPayloadNote))
  }

  const resetNoteHistoryLocalStorage = () => {
    cookie.remove(COOKIE_KEYS.NOTE_HISTORY)
  }

  const hasOneNoteHistory = useCallback((noteHistoryName: string): boolean => {
    const allNoteHistory = getAllNoteHistoryLocalStorage();
    const findNoteHistory = allNoteHistory.find(noteHistory => noteHistory.note_name === noteHistoryName);
    if (findNoteHistory && findNoteHistory.note_name) return true;
    return false;
  }, [getAllNoteHistoryLocalStorage])

  return {
    getAllNoteHistoryLocalStorage,
    getOneNoteHistoryLocalStorage,
    removeNoteHistoryLocalStorage,
    resetNoteHistoryLocalStorage,
    addNoteHistoryLocalStorage,
    hasOneNoteHistory,
  }
}

export default useNoteHistory
