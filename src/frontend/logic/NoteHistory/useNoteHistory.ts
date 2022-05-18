import cookie from 'js-cookie';
import { iNoteHistoryUsage, iUseNoteHistory } from '../../../interfaces/logics'
import { COOKIE_KEYS } from '../../../interfaces/next/cookieKeys';
import useCookieNoteHistory from './Cookies_NoteHistory';

export const setEncryptedCookieNoteHistoryUsage = (valueStringified: string) => cookie.set(COOKIE_KEYS.NOTE_HISTORY_USAGE, btoa(valueStringified));

const useNoteHistory = (type?: iNoteHistoryUsage): iUseNoteHistory => {
  const decodedParsedCookieNoteHistoryUsage: iNoteHistoryUsage | undefined = cookie.get(COOKIE_KEYS.NOTE_HISTORY_USAGE) as iNoteHistoryUsage || undefined;
  const _type = type || decodedParsedCookieNoteHistoryUsage || 'COOKIE';

  const NoteHistoryByCurrentType = {
    COOKIE: useCookieNoteHistory(),
  }[_type]

  return NoteHistoryByCurrentType;
}

export default useNoteHistory
