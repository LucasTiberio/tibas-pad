import moment from 'moment'
import { COOKIE_KEYS } from '../interfaces/next/cookieKeys'
import cookie from 'js-cookie'
import { useMemo } from 'react'
import { iLocalStorageAuthentication } from '../interfaces/logics'

const useAuthentication = (notepadName?: string) => {
  const setAuthenticationLocalStorage = (notepadName: string, keyValue: 'ok' | 'error') => {
    const valueInBase64 = btoa(keyValue)
    const notepadNameInBase64 = btoa(notepadName);

    const expiresAtIso = moment().add(15, 'm').toISOString()

    const valueToLocalStorage: iLocalStorageAuthentication = {
      expiresAtIso,
      notepadName: notepadNameInBase64,
      value: valueInBase64,
    }
    const valueToLocalStorageStringified = JSON.stringify(valueToLocalStorage)
    cookie.set(COOKIE_KEYS.AUTHENTICATION, valueToLocalStorageStringified)
    window.location.reload()
  }

  const resetAuthenticationLocalStorage = () => {
    cookie.remove(COOKIE_KEYS.AUTHENTICATION)
  }

  const isAuthenticated = useMemo(() => {
    const cookieValue = cookie.get(COOKIE_KEYS.AUTHENTICATION) || undefined
    if (!cookieValue) return false

    const valueParsed: iLocalStorageAuthentication = JSON.parse(
      `${cookieValue}`
    )

    if (notepadName && notepadName !== valueParsed.notepadName) return false;

    const storageExpiresAtMoment = moment(valueParsed.expiresAtIso)

    if (moment().isBefore(storageExpiresAtMoment)) return true

    resetAuthenticationLocalStorage()
    return false
  }, [notepadName])

  return {
    setAuthenticationLocalStorage,
    resetAuthenticationLocalStorage,
    isAuthenticated,
  }
}

export default useAuthentication
