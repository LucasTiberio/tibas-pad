import { COOKIE_KEYS } from '../../../interfaces/next/cookieKeys'
import cookie from 'js-cookie'
import { iNoteHistory as iCookieNoteHistory, iUseNoteHistory } from '../../../interfaces/logics'
import { useCallback, useMemo } from 'react'

const useCookieNoteHistory = (): iUseNoteHistory => {
  const setEncryptedCookie = (stringfiedValue: string) => {
    const valueInBase64 = btoa(stringfiedValue);
    cookie.set(COOKIE_KEYS.NOTE_HISTORY, valueInBase64)
  }

  const cookieNote = cookie.get(COOKIE_KEYS.NOTE_HISTORY);

  const getAllCookieNoteHistoryCookie = useMemo((): iCookieNoteHistory[] => {
    if (!cookieNote) return [];

    const cookiesBase64Decoded = atob(cookieNote)
    const cookiesParsed: iCookieNoteHistory[] = JSON.parse(cookiesBase64Decoded)
    return cookiesParsed
  }, [cookieNote])

  const getOneCookieNoteHistoryCookie = (name: string): iCookieNoteHistory | undefined => {
    const cookieNote = cookie.get(COOKIE_KEYS.NOTE_HISTORY);
    if (!cookieNote) return undefined;

    const cookiesBase64Decoded = atob(cookieNote)
    const cookiesParsed: iCookieNoteHistory[] = JSON.parse(cookiesBase64Decoded)

    const noteHistoryByName = cookiesParsed.find(noteHistory => noteHistory.note_name === name);
    if (!noteHistoryByName) return undefined;

    return noteHistoryByName;
  }

  const addCookieNoteHistoryCookie = (name: string, updated_at: string, protection?: string) => {
    const newCookieNoteHistory = [...getAllCookieNoteHistoryCookie]
    newCookieNoteHistory.push({
      note_name: name,
      note_updated_at: updated_at,
      note_protection: protection,
    })

    setEncryptedCookie(JSON.stringify(newCookieNoteHistory))
  }

  const updateCookieNoteHistoryCookie = (name: string, updated_at: string, protection?: string) => {
    const newCookieNoteHistory = [...getAllCookieNoteHistoryCookie]

    const expecificCookieNoteHistory = newCookieNoteHistory.findIndex(cookieNoteHistory => cookieNoteHistory.note_name === name);
    if (expecificCookieNoteHistory === -1) return

    newCookieNoteHistory[expecificCookieNoteHistory] = {
      note_name: name,
      note_protection: protection,
      note_updated_at: updated_at,
    }

    setEncryptedCookie(JSON.stringify(newCookieNoteHistory))
  }

  const addOrUpdateCookieNoteHistoryCookie = (name: string, updated_at: string, protection?: string) => {
    const newCookieNoteHistory = [...getAllCookieNoteHistoryCookie]
    const expecificCookieNoteHistory = newCookieNoteHistory.findIndex(cookieNoteHistory => cookieNoteHistory.note_name === name);

    if (expecificCookieNoteHistory === -1) addCookieNoteHistoryCookie(name, updated_at, protection);
    else updateCookieNoteHistoryCookie(name, updated_at, protection);
  }

  const removeCookieNoteHistoryCookie = (name: string) => {
    const allCookieNoteHistory = getAllCookieNoteHistoryCookie;
    const noteHistoryWithoutPayloadNote = allCookieNoteHistory.filter(noteHistory => noteHistory.note_name !== name);
    setEncryptedCookie(JSON.stringify(noteHistoryWithoutPayloadNote))
  }

  const resetCookieNoteHistoryCookie = () => {
    cookie.remove(COOKIE_KEYS.NOTE_HISTORY)
  }

  const existsCookieNoteHistory = useCallback((noteHistoryName: string): boolean => {
    const allCookieNoteHistory = getAllCookieNoteHistoryCookie;
    const findCookieNoteHistory = allCookieNoteHistory.find(noteHistory => noteHistory.note_name === noteHistoryName);
    if (findCookieNoteHistory && findCookieNoteHistory.note_name) return true;
    return false;
  }, [getAllCookieNoteHistoryCookie])

  return {
    getAllNoteHistory: getAllCookieNoteHistoryCookie,
    getOneNoteHistory: getOneCookieNoteHistoryCookie,
    removeNoteHistory: removeCookieNoteHistoryCookie,
    resetNoteHistory: resetCookieNoteHistoryCookie,
    addNoteHistory: addCookieNoteHistoryCookie,
    existsNoteHistory: existsCookieNoteHistory,
    addOrUpdateCookieNoteHistory: addOrUpdateCookieNoteHistoryCookie,
  }
}

export default useCookieNoteHistory